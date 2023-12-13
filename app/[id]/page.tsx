import { createClient } from "@/utils/supabase/server";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { BiLogoFacebookSquare, BiMailSend } from "react-icons/bi";
import { Farm } from "../../utils/interfaces";

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
          url: farm.logo_url ?? "https://www.oseille.app/maraicher.jpg",
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
    <div className="p-4" style={{ width: "800px" }}>
      <div className="flex gap-4 mb-4">
        {farm.logo_url && (
          <Image
            src={farm.logo_url}
            width={150}
            height={150}
            alt="logo de la ferme"
          />
        )}
        <div>
          <div className="text-xl font-bold">{farm.name}</div>
          <div>{farm.description}</div>

          {farm.social && (
            <div className="flex">
              {farm.social.facebook && (
                <Link href={farm.social.facebook}>
                  <BiLogoFacebookSquare size="2em" />
                </Link>
              )}
              {farm.social.email && (
                <Link href={`mailto:${farm.social.email}`}>
                  <BiMailSend size="2em" />
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {farm.team && (
          <div>
            <div className="text-xl font-bold ">Qui sommes-nous ?</div>
            <div className="flex gap-4 border rounded p-2 bg-gray-100">
              {farm.team.map((member, index) => (
                <div
                  key={index}
                  className="p-4 border rounded flex gap-4 w-1/2 bg-gray-50"
                >
                  <Image
                    src={member.pic_url}
                    width={150}
                    height={150}
                    alt="profile picture"
                  />
                  <div>
                    <div className="font-bold">{member.name}</div>
                    <div>{member.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        <div>
          <div className="text-xl font-bold">Que faisons-nous ?</div>
          {farm.activities && (
            <div className="flex gap-4 border rounded p-2 bg-gray-100">
              {farm.activities.map((activity, index) => (
                <div
                  className="p-4 border rounded flex gap-4 w-1/4 bg-gray-50 items-center justify-center text-center"
                  key={index}
                >
                  {activity.title}
                </div>
              ))}
            </div>
          )}
        </div>
        <div>
          <div className="text-xl font-bold">Nos produits</div>
          {farm.products && (
            <div className="flex gap-4 border rounded p-2 bg-gray-100">
              {farm.products.map((product, index) => (
                <div
                  className="p-4 border rounded flex gap-4 w-1/4 bg-gray-50 items-center justify-center"
                  key={index}
                >
                  {product.title}
                </div>
              ))}
            </div>
          )}
        </div>
        <div>
          <div className="text-xl font-bold">Où nous trouver ?</div>

          <div className="p-4">
            {farm.open_hours && (
              <div>
                <span className="font-bold">Marché à la ferme:</span>{" "}
                {farm.open_hours.map((openHour) => openHour.time).join(", ")}
              </div>
            )}
            {farm.deliveries && (
              <div>
                <span className="font-bold">Livraisons:</span>{" "}
                {farm.deliveries.map(
                  (delivery) => `${delivery.time} - ${delivery.place}`
                )}
              </div>
            )}
          </div>
        </div>

        {farm.address && (
          <div className="border rounded p-4 text-center">
            <div>{farm.name}</div>
            <div>{farm.address.address1}</div>
            <div>{farm.address.address2}</div>
            <div>
              {farm.address.zip} {farm.address.city}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
