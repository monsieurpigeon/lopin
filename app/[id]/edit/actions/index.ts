"use server";

import createSupabaseServerClient from "../../../../utils/supabase/server";

export async function updateFarmById(id: string, { name }: { name: string }) {
  const supabase = await createSupabaseServerClient();
  console.log(name, id);
  return await supabase.from("farm").update({ name }).eq("id", id);
}
