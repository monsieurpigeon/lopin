import { Box, Button, Input, Text } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { supabase, useAuth } from "../../../UserContext";

const farmSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
});

export function FarmForm({ onClose }: { onClose: () => void }) {
  const { user } = useAuth();
  const methods = useForm({
    resolver: zodResolver(farmSchema),
  });

  const [available, setAvailable] = useState<boolean | null>(null);

  const saveFarm = async (data: any) => {
    const { data: farm, error } = await supabase.from("farm").insert([
      {
        ...data,
        user_id: user?.id,
      },
    ]);
    console.log(farm, error);
    onClose();
  };

  const onSubmit = (data: any) => {
    console.log(data);
    saveFarm(data);
  };

  const watchName = methods.watch("name");
  const watchSlug = methods.watch("id");

  useEffect(() => {
    watchName &&
      methods.setValue("id", watchName.toLowerCase().replace(/\s/g, "-"));
  }, [watchName]);

  useEffect(() => {
    const checkAvailability = async () => {
      const { data: farm } = await supabase
        .from("farm")
        .select()
        .eq("id", watchSlug);
      console.log(farm);
      if (farm && farm.length > 0) {
        setAvailable(false);
      } else {
        setAvailable(true);
      }
    };

    const timeout = setTimeout(() => {
      checkAvailability();
    }, 500);
    return () => clearTimeout(timeout);
  }, [watchSlug]);

  return (
    <div>
      <h2>Ajouter une ferme</h2>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Box>
          <Text>Nom de la ferme</Text>
          <Input {...methods.register("name")} />
        </Box>
        {available === false && (
          <Text color="red.500">Ce nom de ferme est déjà pris</Text>
        )}
        <Box>
          <Text>Adresse de la page</Text>
          <Input {...methods.register("id")} />
        </Box>
        <Box>
          <Text>Description</Text>
          <Input {...methods.register("description")} />
        </Box>
        <Button type="submit">Enregistrer</Button>
      </form>
    </div>
  );
}
