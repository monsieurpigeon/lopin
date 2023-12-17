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
        <div>
          <input type="text" name="name" defaultValue={farm.name} />
        </div>
        <div>
          <input
            type="text"
            name="description"
            defaultValue={farm.description}
          />
        </div>
        <div>
          <h1>Adresse</h1>
          <pre>{JSON.stringify(farm.address, null, 4)}</pre>
        </div>
        <div>
          <h1>Ouverture</h1>
          <pre>{JSON.stringify(farm.open_hours, null, 4)}</pre>
        </div>
        <div>
          <h1>Livraisons</h1>
          <pre>{JSON.stringify(farm.deliveries, null, 4)}</pre>
        </div>
        <div>
          <h1>Social</h1>
          <pre>{JSON.stringify(farm.social, null, 4)}</pre>
        </div>
        <div>
          <h1>Produits</h1>
          <pre>{JSON.stringify(farm.products, null, 4)}</pre>
        </div>
        <div>
          <h1>Activités</h1>
          <pre>{JSON.stringify(farm.activities, null, 4)}</pre>
        </div>
        <div>
          <h1>Equipe</h1>
          <pre>{JSON.stringify(farm.team, null, 4)}</pre>
        </div>
        <div>
          <button type="submit">Enregistrer</button>
        </div>
      </form>
    </div>
  );
}
