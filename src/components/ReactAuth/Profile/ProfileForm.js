// Packages and Dependencies
import { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
// Styles
import styles from "./ProfileForm.module.css";
// Components
import AuthContext from "../../../store/Auth/auth-context.js";

const ProfileForm = () => {
  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredNewPassword = newPasswordInputRef.current.value;
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBedbys3MduTOK5lLc5XkYnsAr5qVTea7Y",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: enteredNewPassword,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      navigate("/reactauth");
    });
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          minLength="7"
          ref={newPasswordInputRef}
        />
      </div>
      <div className={styles.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
