import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthProvider, { supabase } from "./UserContext";
import { MainLayout } from "./components/layout/MainLayout";
import { AuthPage } from "./pages/AuthPage";
import { FarmPage } from "./pages/farm/FarmPage";
import { HomePage } from "./pages/home/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "auth",
        element: <AuthPage />,
      },
    ],
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
]);

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
