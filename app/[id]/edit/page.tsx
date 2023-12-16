import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import z from "zod";
import { Farm } from "../../../utils/interfaces";
import { updateFarmById } from "./actions";

interface Props {
  params: { id: string };
}

const schema = z.object({ name: z.string(), description: z.string() });

export default async function Page({ params }: Props) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data: farms } = await supabase
    .from("farm")
    .select()
    .eq("id", params.id);

  const farm = farms?.[0] as Farm;

  async function onSubmit(request: FormData) {
    "use server";
    const name = (request.get("name") as string) || farm.name;
    const description =
      (request.get("description") as string) || farm.description;
    updateFarmById(farm.id, { name, description });
  }

  return (
    <div>
      <form action={onSubmit}>
        <input type="text" name="name" defaultValue={farm.name} />
        <input type="text" name="description" defaultValue={farm.description} />
        <button type="submit">Enregistrer</button>
      </form>
    </div>
  );
}
