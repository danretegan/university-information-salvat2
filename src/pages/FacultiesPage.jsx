import { useEffect, useState } from "react";

const FacultiesPage = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // get faculties data
  });

  if (isLoading) {
    return <div>Se incarca...</div>;
  }

  return (
    <div>
      <h2>Faculties</h2>
    </div>
  );
};

export default FacultiesPage;
