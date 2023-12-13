import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { Farm } from "../../../utils/interfaces";
import { updateFarmById } from "./actions";

interface Props {
  params: { id: string };
}

export default async function Page({ params }: Props) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data: farms } = await supabase
    .from("farm")
    .select()
    .eq("id", params.id);

  const farm = farms?.[0] as Farm;
  const updateFarm = updateFarmById.bind(null, farm.id, { name: "PROUT" });

  return (
    <div>
      <form action={updateFarm}>
        <input type="text" name="name" defaultValue={farm.name} />
        <button type="submit">Enregistrer</button>
      </form>
    </div>
  );
}
