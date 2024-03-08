import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/selectors";
import { loginUser, registerUser } from "../../redux/slices/authSlice";
import Error from "../common/components/error/Error";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");

  const userInfo = useSelector(selectUser);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Attempting login...");

      const payload = {
        email: emailLogin,
        password: passwordLogin,
      };

      await dispatch(loginUser(payload));

      if (userInfo.isAuthenticated) {
        navigate("/university-information");
      } else {
        setEmailLogin("");
        setPasswordLogin("");
      }
    } catch (err) {
      console.error("Failed to login the user", err);
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Attempting registration...");

      const payload = {
        email: emailRegister,
        password: passwordRegister,
      };

      await dispatch(registerUser(payload));

      setEmailRegister("");
      setPasswordRegister("");
    } catch (err) {
      console.error("Failed to register the user", err);
    }
  };

  const handleLogout = (e) => {
    e.preventDefault();
  };

  const errorMessage = userInfo?.error || "";

  return (
    <section>
      <code>{JSON.stringify(userInfo)}</code>
      {errorMessage.length > 0 && <Error message={errorMessage} />}

      {/* Login */}
      <form onSubmit={handleLoginSubmit}>
        <h2>Login:</h2>
        <label>
          <span>Email:</span>
          <input
            type="text"
            onChange={(e) => setEmailLogin(e.target.value)}
            // includem atributul value pentru a crea un input controlat și a ne asigura că inputul reflectă întotdeauna starea (starea emailLogin /la fel si mai jos).
            value={emailLogin}
          />
        </label>

        <label>
          <span>Password:</span>
          <input
            type="password"
            onChange={(e) => setPasswordLogin(e.target.value)}
            value={passwordLogin}
          />
        </label>

        <button>Login</button>
      </form>

      {/* Register */}
      <form onSubmit={handleRegisterSubmit}>
        <h2>Register:</h2>
        <label>
          <span>Email:</span>
          <input
            type="text"
            onChange={(e) => setEmailRegister(e.target.value)}
            value={emailRegister}
          />
        </label>

        <label>
          <span>Password:</span>
          <input
            type="password"
            onChange={(e) => setPasswordRegister(e.target.value)}
            value={passwordRegister}
          />
        </label>

        <button>Register</button>
      </form>

      {/* Logout */}
      <button onClick={handleLogout}>Logout</button>
    </section>
  );
}

export default LoginPage;
