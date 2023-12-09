import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";

export function FarmPage() {
  const { farm } = useLoaderData() as { farm: any };

  return (
    <div>
      <Helmet>
        <title>{farm.name}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {farm && farm?.length !== 0 ? (
        <div>FARM: {JSON.stringify(farm, null, 4)}</div>
      ) : (
        "Cette ferme n'existe pas dans la base"
      )}
    </div>
  );

  return;
}
