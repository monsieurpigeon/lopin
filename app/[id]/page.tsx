import { createClient } from "@/utils/supabase/server";
import type { Metadata } from "next";
import { cookies } from "next/headers";

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const id = params.id;
  const { data: farms } = await supabase
    .from("farm")
    .select()
    .eq("id", params.id);

  const farm = farms?.[0];

  return {
    title: farm.name,
    openGraph: {
      type: "website",
      title: farm.name,
      siteName: "Lopin",
      description: farm.description,
      url: `https://lopin.app/${id}`,
      images: [
        {
          url: "https://www.oseille.app/maraicher.jpg",
        },
      ],
    },
  };
}

export default async function Page({ params }: Props) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data: farms } = await supabase
    .from("farm")
    .select()
    .eq("id", params.id);

  return <div>My Post: {JSON.stringify(farms, null, 4)}</div>;
}
