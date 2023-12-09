import { Outlet } from "react-router-dom";
import { MainLayout } from "../components/layout/MainLayout";

export function Home() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}
