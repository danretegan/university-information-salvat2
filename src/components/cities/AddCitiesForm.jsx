import PropTypes from "prop-types";
import Button from "../common/button/Button";
import { useState } from "react";

const AddCitiesForm = ({ onFormSubmit }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit({ name });
  };

  const handleChange = (evt) => {
    const { value } = evt.target;
    setName(value);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Adding a city</h2>
      <label>
        <span>Adding a city</span>
        <input
          type="text"
          value={name}
          placeholder="City"
          onChange={handleChange}
          required
        />
      </label>

      <Button type="submit">Add</Button>
    </form>
  );
};

AddCitiesForm.propTypes = {
  onFormSubmit: PropTypes.func,
};

export default AddCitiesForm;
