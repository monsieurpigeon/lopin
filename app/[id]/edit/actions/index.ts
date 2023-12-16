"use server";

import createSupabaseServerClient from "../../../../utils/supabase/server";

export async function updateFarmById(
  id: string,
  { name, description }: { name: string; description: string }
) {
  const supabase = await createSupabaseServerClient();
  return await supabase.from("farm").update({ name, description }).eq("id", id);
}
