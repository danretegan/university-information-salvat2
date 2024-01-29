import { Component } from "react";
import PropTypes from "prop-types";
import Button from "../common/button/Button";

export default class AddCitiesForm extends Component {
  static propTypes = {
    onFormSubmit: PropTypes.func,
  };

  state = {
    name: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onFormSubmit(this.state);
  };

  handleChange = (evt) => {
    const { value } = evt.target;
    this.setState({
      name: value,
    });
  };

  render() {
    const { name } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="form">
        <h2>Adding a city</h2>
        <label>
          <span>Adding a city</span>
          <input
            type="text"
            value={name}
            placeholder="City"
            onChange={this.handleChange}
            required
          />
        </label>

        <Button type="submit">Add</Button>
      </form>
    );
  }
}
