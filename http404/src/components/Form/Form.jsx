import styles from "./Form.module.css"
import picture from "./illustration_atena_login.png"

export const Form = ({ submitText, isPasswordHidden = false, onSubmit }) => (
  

  <div className={styles.formWrapper}>
    <img className={styles.picture} src={picture} alt="picture books"></img>
    <form onSubmit={onSubmit} >
      <div className={styles.labelWrapper}>
        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" id="email" />
      </div>
      {!isPasswordHidden && (
        <div className={styles.labelWrapper}>
          <label htmlFor="password">Hasło</label>
          <input type="password" name="password" id="password" />
        </div>
      )}
      <div className={styles.btnWrapper}>
      <button className={styles.btnForm}>{submitText}</button>
      </div>
    </form>
    </div>
    
  )