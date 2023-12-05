import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { Farm } from "./farm";

export default async function Page({ params }: { params: { id: string } }) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data: farm } = await supabase
    .from("farm")
    .select()
    .eq("id", params.id);

  return (
    <div>
      {farm && farm?.length !== 0 ? (
        <Farm farm={farm[0]} />
      ) : (
        "Cette ferme n'existe pas dans la base"
      )}
    </div>
  );
}
