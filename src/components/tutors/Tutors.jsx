import styles from "./Tutors.module.css";
import Button from "../common/button/Button";
import AddTutor from "./addTutor/AddTutor";
import Icon from "../common/icon/Icon";
import { useEffect, useState } from "react";
// import tutorsService from "../../services/tutorsService";

const TUTORS_KEY = "tutors";

const Tutors = () => {
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [list, setList] = useState([]);
  // const [error, setError] = useState("");
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   async function getTutors() {
  //     const response = await tutorsService.get();
  //     setList(response.data);
  //   }

  //   setIsLoading(true);
  //   getTutors()
  //     .catch((error) => console.error(error))
  //     .finally(() => setIsLoading(false));
  // }, []);

  useEffect(() => {
    localStorage.setItem(TUTORS_KEY, JSON.stringify(list));
  }, [list]);

  const renderList = (items) => {
    if (!items || !Array.isArray(items)) {
      return <>Loading...</>;
    }

    if (items.length === 0) {
      return <div>There are no tutors.</div>;
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
      <div className={`box ${styles.tutorsList}`}>{renderList(list)}</div>
      {isAddFormVisible && <AddTutor onFormSubmit={handleTutor} />}
      <Button action={() => setIsAddFormVisible(true)}>Add Tutor</Button>
    </section>
  );
};

export default Tutors;
