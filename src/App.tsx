import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthProvider, { supabase } from "./UserContext";
import { AuthPage } from "./pages/AuthPage";
import { Home } from "./pages/Home";
import { FarmPage } from "./pages/farm/FarmPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,

    children: [
      {
        path: "auth",
        element: <AuthPage />,
      },
      {
        path: ":farmId",
        loader: async ({ params }) => {
          const { data: farm } = await supabase
            .from("farm")
            .select()
            .eq("id", params.farmId);

          return { farm: farm?.[0] };
        },
        element: <FarmPage />,
      },
    ],
  },
]);

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
