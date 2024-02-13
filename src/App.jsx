import "./App.css";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import UniversitiesPage from "./pages/universities/UniversitiesPage";
import FacultiesPage from "./pages/faculties/FacultiesPage";
import FacultyPage from "./pages/FacultyPage";

import FacultyDescription from "./pages/faculties/faculty/components/FacultyDescription";
import FacultyHistory from "./pages/faculties/faculty/components/FacultyHistory";

import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <Routes>
      <Route path="/university-information" element={<SharedLayout />}>
        <Route index element={<UniversitiesPage />}></Route>
        <Route path="faculties" element={<FacultiesPage />} />
        <Route path="faculties/:id" element={<FacultyPage />}>
          <Route index element={<FacultyDescription />} />
          <Route path="description" element={<FacultyDescription />} />
          <Route path="history" element={<FacultyHistory />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
