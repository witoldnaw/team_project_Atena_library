import styles from "./Form.module.css";
import picture from "./illustration_atena_login.png";

export const FormForgotPassword = ({
  submitText,
  isPasswordHidden = false,
  onSubmit,
}) => (
  <div className={styles.formWrapper}>
    <img className={styles.picture} src={picture} alt="books"></img>
    <form onSubmit={onSubmit}>
      <h3 className={styles.forgotPasswordTitle}>Przypomnij hasło:</h3>
      <div className={styles.labelWrapper}>
        <label htmlFor="email">E-mail:</label>
        <input type="email" name="email" id="email" />
      </div>
      {!isPasswordHidden && (
        <div className={styles.labelWrapper}>
          <label htmlFor="password">Hasło</label>
          <input type="password" name="password" id="password" />
        </div>
      )}
      <div className={styles.btnWrapper}>
        <button className={styles.btnForgotPassword}>{submitText}</button>
      </div>
    </form>
  </div>
);
