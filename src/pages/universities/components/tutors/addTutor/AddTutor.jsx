import PropTypes from "prop-types";
import Button from "../../../../common/components/button/Button";
import { useEffect, useState } from "react";

const AddTutor = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    surname: "",
    name: "",
    phone: "",
    email: "",
    city: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(formData);
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const { surname, name, phone, email, city } = formData;

  useEffect(() => {
    console.log("Add tutor a fost modificat");
    return () => {
      console.log("Add tutor a fost sters din DOM");
    };
  }, []);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Add a tutor</h1>
      <label>
        <span>Surname</span>
        <input
          type="text"
          value={surname}
          name="surname"
          placeholder="Surname"
          onChange={handleChange}
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
          onChange={handleChange}
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
          onChange={handleChange}
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
          onChange={handleChange}
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
          onChange={handleChange}
          required
        />
      </label>

      <Button type="submit">Invite</Button>
    </form>
  );
};

AddTutor.propTypes = {
  onFormSubmit: PropTypes.func,
};

export default AddTutor;
