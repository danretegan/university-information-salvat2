import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import citiesService from "../common/services/citiesService";
import Error from "../common/components/error/Error";

const FacultiesPage = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getCities() {
      try {
        setIsLoading(true);
        const response = await citiesService.getCities();
        setList(response);
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
      <h2>Faculties</h2>
      <div>
        {list.map((item) => (
          <div key={item.id}>
            {item.name}
            <Link
              to={`/university-information/faculties/${item.id}/description`}
            >
              <span>Details</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacultiesPage;
