import styles from "./Tutors.module.css";
import Icon from "../../../common/components/icon/Icon";
import Error from "../../../common/components/error/Error";
import Button from "../../../common/components/buttons/Button";
import Loading from "../../../common/components/loading/Loading";
import SearchBar from "../../../common/components/searchBar/SearchBar";
import AddTutor from "./addTutor/AddTutor";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTutor, fetchTutors } from "../../../../redux/slices/tutorsSlice";
import {
  selectFilteredTutors,
  selectTutorsError,
  selectTutorsFilter,
  selectTutorsStatus,
} from "../../../../redux/selectors";
import { setFilter } from "../../../../redux/slices/tutorsFilterSlice";

export default function Tutors() {
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const filteredList = useSelector(selectFilteredTutors);
  const searchTerm = useSelector(selectTutorsFilter);
  const tutorsStatus = useSelector(selectTutorsStatus);
  const error = useSelector(selectTutorsError);

  const dispatch = useDispatch();

  const isLoading = tutorsStatus === "loading";

  // GET
  useEffect(() => {
    if (tutorsStatus === "idle") {
      dispatch(fetchTutors());
    }
  }, [tutorsStatus, dispatch]);

  return (
    <section className="section">
      <h2>
        <Icon variant="cat" label="Tutors" />
        <span>Tutors</span>
      </h2>
      {error.length > 0 && <Error message={error} />}
      {!error && renderTutors()}
    </section>
  );

  function renderTutors() {
    return (
      <>
        <div className={`box ${styles.tutorsList}`}>
          {renderList(filteredList)}
        </div>

        {isAddFormVisible && <AddTutor onFormSubmit={handleAddTutor} />}
        {isLoading && <Loading />}

        <SearchBar
          handleChange={(evt) => {
            dispatch(setFilter(evt.target.value));
          }}
          placeholder="Search for tutor..."
          searchTerm={searchTerm}
        />

        <div className={"mt-16"}>
          <Button
            action={() => {
              setIsAddFormVisible(true);
            }}
            isDisabled={addRequestStatus === "pending"}
          >
            {addRequestStatus === "pending" ? "Adding tutor..." : "Add tutor"}
          </Button>
        </div>
      </>
    );
  }

  // Render the list of tutors
  function renderList(items) {
    if (!items || !Array.isArray(items)) {
      return <>Loading...</>;
    }

    if (items.length === 0) {
      const hasSearchTerm = searchTerm.length > 0;

      return hasSearchTerm ? (
        <div>No tutors matching with this name have been found.</div>
      ) : (
        <div>There are no tutors.</div>
      );
    }

    return items.map((el) => {
      const name = `${el.firstName} ${el.lastName}`;

      return (
        <div key={el.id} className={styles.tutorsListItem}>
          <div>{name}</div>
          <div className={styles.address}>
            <span>{el.email}</span>
            <span>{el.telephone}</span>
            <span>{el.location}</span>
          </div>
          <div>{el.role}</div>
        </div>
      );
    });
  }

  async function handleAddTutor(data) {
    try {
      setAddRequestStatus("pending");

      const tutorToAdd = {
        firstName: data.name,
        lastName: data.surname,
        telephone: data.phone,
        email: data.email,
        city: data.city,
      };

      await dispatch(addTutor(tutorToAdd));
    } catch (err) {
      console.error("Failed to save the post: ", err);
    } finally {
      setIsAddFormVisible(false);
      setAddRequestStatus("idle");
    }
  }
}
