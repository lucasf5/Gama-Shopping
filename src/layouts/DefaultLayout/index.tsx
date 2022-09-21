import { Outlet } from "react-router-dom";
import {Navigation} from "../../components/PI-003-NavBar";

export function DefaultLayout() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
