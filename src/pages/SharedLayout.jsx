import { Outlet } from "react-router-dom";
import Sidebar from "./common/components/sidebar/Sidebar";
import { Suspense } from "react";

const SharedLayout = () => {
  return (
    <main className="App">
      <Sidebar />
      <section className="container">
        <Suspense>
          <Outlet />
        </Suspense>
      </section>
    </main>
  );
};

// Dacă folosim tehnica «shared layout», atunci Suspense trebuie plasat direct în componenta SharedLayout. În caz contrar, la fiecare încărcare a paginii, componentele comune a paginilor, cum ar fi header și navigation, vor dispărea și vor fi randate din nou.

export default SharedLayout;
