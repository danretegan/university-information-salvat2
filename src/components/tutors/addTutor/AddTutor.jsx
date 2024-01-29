import { Component } from "react";
import PropTypes from "prop-types";
import Button from "../../common/button/Button";

export default class AddTutor extends Component {
  static propTypes = { onFormSubmit: PropTypes.func };

  state = {
    surname: "",
    name: "",
    phone: "",
    email: "",
    city: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state);
  };

  handleChange = (evt) => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
    // console.log("change");
  };

  // componentDidMount() {
  //   console.info("Am montat componenta addTutors...");
  // }

  // componentDidUpdate() {
  //   console.info("Am actualizat componenta addTutors.");
  // }

  // componentWillUnmount() {
  //   console.info("Am demontat componenta addTutors!");
  // }

  // shouldComponentUpdate() {
  //   console.info("ar trebui să se actualizeze componenta addTutors?");
  //   return true;
  // }

  render() {
    const { surname, name, phone, email, city } = this.state;

    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <h1>Add a tutor</h1>
        <label>
          <span>Surname</span>
          <input
            type="text"
            value={surname}
            name="surname"
            placeholder="Surname"
            onChange={this.handleChange}
            required
          />
        </label>

        <label>
          <span>Name</span>
          <input
            type="text"
            value={name}
            name="name"
            placeholder="Name"
            onChange={this.handleChange}
            required
          />
        </label>

        <label>
          <span>Phone</span>
          <input
            type="tel"
            value={phone}
            name="phone"
            placeholder="Phone"
            onChange={this.handleChange}
            required
          />
        </label>

        <label>
          <span>Email</span>
          <input
            type="email"
            value={email}
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
            required
          />
        </label>

        <label>
          <span>City</span>
          <input
            type="text"
            value={city}
            name="city"
            placeholder="City"
            onChange={this.handleChange}
            required
          />
        </label>

        <Button type="submit">Invite</Button>
      </form>
    );
  }
}
