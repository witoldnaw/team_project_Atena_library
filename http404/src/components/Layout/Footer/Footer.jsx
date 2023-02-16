import styles from "./Footer.module.css";
import illustration_books_footer from "./illustration_books_footer.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <img
        className={styles.img}
        src={illustration_books_footer}
        alt="books"
      ></img>
      <p className={styles.pFooter}>Biblioteka Atena</p>
    </div>
  );
};

export default Footer;
