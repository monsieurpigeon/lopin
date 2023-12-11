import { createClient } from "@/utils/supabase/server";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";

interface Props {
  params: { id: string };
}

interface Farm {
  id: string;
  name: string;
  logo_url?: string;
  description: string;
  address?: {
    address1: string;
    address2?: string;
    zip: string;
    city: string;
  };
  social?: {
    email?: string;
    facebook?: string;
  };
  open_hours: Array<{ time: string }>;
  deliveries: Array<{ time: string; place: string }>;
  products: Array<{ title: string }>;
  activities: Array<{ title: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const id = params.id;
  const { data: farms } = await supabase
    .from("farm")
    .select()
    .eq("id", params.id);

  const farm = farms?.[0] as Farm;

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

  const farm = farms?.[0] as Farm;

  return (
    <div>
      {farm.logo_url && (
        <Image
          src={farm.logo_url}
          width={200}
          height={200}
          alt="logo de la ferme"
        />
      )}
      <h1>{farm.name}</h1>
      {farm.address && (
        <div>
          <div>{farm.address.address1}</div>
          <div>{farm.address.address2}</div>
          <div>
            {farm.address.zip} {farm.address.city}
          </div>
        </div>
      )}
      {farm.social && (
        <div>
          Coordonnées:
          {farm.social.facebook && (
            <Link href={farm.social.facebook}>Facebook</Link>
          )}
          {farm.social.email && <div>{farm.social.email}</div>}
        </div>
      )}
      <div>{farm.description}</div>
      {farm.open_hours && (
        <div>
          Marché à la ferme:
          {farm.open_hours.map((openHour, index) => (
            <div key={index}>{openHour.time}</div>
          ))}
        </div>
      )}
      {farm.deliveries && (
        <div>
          Livraisons:
          {farm.deliveries.map((delivery, index) => (
            <div key={index}>
              {delivery.time} - {delivery.place}
            </div>
          ))}
        </div>
      )}
      {farm.products && (
        <div>
          Produits:
          {farm.products.map((product, index) => (
            <div key={index}>{product.title}</div>
          ))}
        </div>
      )}
      {farm.activities && (
        <div>
          Activités:
          {farm.activities.map((activity, index) => (
            <div key={index}>{activity.title}</div>
          ))}
        </div>
      )}
    </div>
  );
}
