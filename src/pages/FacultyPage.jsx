import { createContext, useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import citiesService from "../services/citiesService";
import Error from "../components/common/error/Error";

const FacultyContext = createContext();

const FacultyPage = () => {
  const [faculty, setFaculty] = useState({
    id: 0,
    name: "",
    description: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { id } = useParams();

  useEffect(() => {
    async function getCities() {
      try {
        setIsLoading(true);
        const response = await citiesService.getCities();
        setFaculty(response);
        return response;
      } catch (error) {
        console.error(error);
        setError("A aparut o eroare la obtinerea listei de orase");
      } finally {
        setIsLoading(false);
      }
    }

    getCities();
  }, []);

  if (error && error.length > 0) {
    return <Error message={error} />;
  }

  if (isLoading) {
    return <div>Se incarca...</div>;
  }

  return (
    <div>
      <div>
        <NavLink to={`/university-information/faculties/${id}/description`}>
          Description
        </NavLink>
        <NavLink to={`/university-information/faculties/${id}/history`}>
          History
        </NavLink>
      </div>
      <FacultyContext.Provider value={faculty}>
        <Outlet />
      </FacultyContext.Provider>
    </div>
  );
};

export default FacultyPage;
