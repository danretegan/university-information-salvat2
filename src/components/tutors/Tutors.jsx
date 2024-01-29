import { Component } from "react";
import styles from "./Tutors.module.css";
import Button from "../common/button/Button";
import AddTutor from "./addTutor/AddTutor";
import Icon from "../common/icon/Icon";

const TUTORS_KEY = "tutors";

class Tutors extends Component {
  state = {
    isAddFormVisible: false,
    list: [],
  };

  async componentDidMount() {
    const data = localStorage.getItem(TUTORS_KEY);

    try {
      if (data) {
        this.setState({
          list: JSON.parse(data),
        });
      }
    } catch (error) {
      console.error(error);
    }
    console.info("Am montat componenta Tutors.");
  }

  componentDidUpdate(_prevProps, prevState) {
    if (prevState?.list.length !== this.state.list.length) {
      localStorage.setItem(TUTORS_KEY, JSON.stringify(this.state.list));
    }
    console.info("Am actualizat componenta Tutors.");
  }

  renderList = (items) => {
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

  // componentWillUnmount() {
  //   console.info("Am demontat componenta Tutors!");
  // }

  // shouldComponentUpdate() {
  //   console.info("ar trebui să se actualizeze componenta Tutors?");
  //   return true;
  // }

  render() {
    const { isAddFormVisible, list } = this.state;
    return (
      <section className="section">
        <h1>
          <Icon variant="cat" label="cat" />
          <span>Tutors</span>
        </h1>
        <div className={`box ${styles.tutorsList}`}>
          {this.renderList(list)}
        </div>
        {isAddFormVisible && <AddTutor onFormSubmit={this.handleTutor} />}
        <Button
          action={() => {
            this.setState({
              isAddFormVisible: true,
            });
          }}
        >
          Add Tutor
        </Button>
      </section>
    );
  }

  handleTutor = (date) => {
    const newId = this.state.list.length > 0 ? this.state.list.length : 0;

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
    this.setState((prevState) => {
      return {
        list: [...prevState.list, tutorToAdd],
        isAddFormVisible: false,
      };
    });
  };
}

export default Tutors;
