import styles from "./Form.module.css";
import picture from "./illustration_atena_signup.png";

export const FormRegister = ({ submitText, onSubmit }) => (
  <div className={styles.formWrapper}>
    <img className={styles.picture} src={picture} alt="picture books"></img>
    <form onSubmit={onSubmit}>
      <div className={styles.labelWrapper}>
        <label htmlFor="email">E-mail:</label>
        <input type="email" name="email" id="email" />
      </div>
      <div className={styles.labelWrapper}>
        <label htmlFor="name">Imię:</label>
        <input type="text" name="name" id="name" />
      </div>
      <div className={styles.labelWrapper}>
        <label htmlFor="surname">Nazwisko:</label>
        <input type="text" name="surname" id="surname" />
      </div>
      <div className={styles.labelWrapper}>
        <label htmlFor="password">Hasło:</label>
        <input type="password" name="password" id="password" />
      </div>
      <div className={styles.labelWrapper}>
        <label htmlFor="description">Napisz coś o sobie:</label>
        <input type="text" name="description" id="description" />
      </div>
      <div className={styles.btnWrapper}>
        <button className={styles.btnForm}>{submitText}</button>
      </div>
    </form>
  </div>
);
