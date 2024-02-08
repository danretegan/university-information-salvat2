import "./App.css";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import HomePage from "./pages/HomePage";

const App = () => {
  console.log("Yes! Primul meu hook!");
  return (
    <>
      <Routes>
        <Route path="/university-information" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
