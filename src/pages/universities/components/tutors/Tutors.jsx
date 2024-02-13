import styles from "./Tutors.module.css";
import Button from "../../../common/components/button/Button";
import Icon from "../../../common/components/icon/Icon";
import AddTutor from "./addTutor/AddTutor";
import { useEffect, useState } from "react";
import tutorsService from "../../../common/services/tutorsService";

const TUTORS_KEY = "tutors";

const Tutors = () => {
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [list, setList] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getTutors() {
      try {
        setIsLoading(true);
        const response = await tutorsService.getTutors();
        setList(response);
      } catch (error) {
        setError("Error fetching tutors");
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    getTutors();
  }, []);

  useEffect(() => {
    localStorage.setItem(TUTORS_KEY, JSON.stringify(list));
  }, [list]);

  const renderList = (items) => {
    if (isLoading) {
      return <>Loading...</>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return items.map((el) => {
      const name = `${el.firstName} ${el.lastName}`;

      return (
        <div key={el.id} className={styles.tutorsListItem}>
          <div>{name}</div>
          <div className={styles.address}>
            <span>{el.email}</span>
            <span>{el.telephone}</span>
            <span>{el.city}</span>
          </div>
          <div>{el.role}</div>
        </div>
      );
    });
  };

  const handleTutor = (date) => {
    const newId = list.length > 0 ? list.length : 0;

    const tutorToAdd = {
      id: newId,
      firstName: date.name,
      lastName: date.surname,
      telephone: date.phone,
      email: date.email,
      city: date.city,
      role: "member",
    };

    /**
     * Pentru orice state care este un obiect sau array si avem nevoie de starea precedenta, folosim metoda de mai jos:
     */
    setList((prevState) => {
      return [...prevState, tutorToAdd];
    });

    setIsAddFormVisible(false);
  };

  return (
    <section className="section">
      <h1>
        <Icon variant="cat" label="cat" />
        <span>Tutors</span>
      </h1>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      <div className={`box ${styles.tutorsList}`}>{renderList(list)}</div>
      {isAddFormVisible && <AddTutor onFormSubmit={handleTutor} />}
      <Button action={() => setIsAddFormVisible(true)}>Add Tutor</Button>
    </section>
  );
};

export default Tutors;
