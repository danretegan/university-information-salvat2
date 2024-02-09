import "./App.css";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import HomePage from "./pages/HomePage";
import FacultiesPage from "./pages/FacultiesPage";
import FacultyPage from "./pages/FacultyPage";

import FacultyDescription from "./components/faculties/FacultyDescription";
import FacultyHistory from "./components/faculties/FacultyHistory";

import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <Routes>
      <Route path="/university-information" element={<SharedLayout />}>
        <Route index element={<HomePage />}></Route>
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
