import styles from "./Form.module.css";
import picture from "./illustration_atena_signup.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "@mui/material";


export const FormRegister = ({ submitText, onSubmit }) => {

const handleOpen = () => {
  setOpen(true)
  setTimeout(() => setOpen(false), 8000);
}
const handleClose = () => setOpen(false)
const [open, setOpen] = useState(false);

  return (
  <div className={styles.formWrapper}>
    <img className={styles.picture} src={picture} alt="books"></img>
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
        <button className={styles.btnForm} onClick={handleOpen}>{submitText}</button>
      </div>
      <Modal
open={open}
onClose={handleClose}
contentLabel="Example Modal"
>
    <div className={styles.modalWrapper}>
    <h2>Gratulacje! Pomyślnie zarejestrowałeś się w naszym serwisie.</h2>
    <p>Teraz możesz korzystać z wszystkich naszych usług. Jeśli potrzebujesz pomocy lub masz jakiekolwiek pytania, nie wahaj się skontaktować z naszym zespołem wsparcia. Dziękujemy za wybór naszej witryny i mamy nadzieję, że będzie Ci miło korzystać z naszych usług.</p>
    <Link to="/">
    <button className={styles.btnModal}>Wróć na stronę główną</button>
    </Link>
    </div>
    </Modal>
    </form>
  </div>
  )
}