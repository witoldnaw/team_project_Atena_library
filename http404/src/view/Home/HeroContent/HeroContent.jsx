import { Link } from "react-router-dom"
import styles from "./HeroContent.module.css"
import illustration from "./illustration_hero_header.png"



const HeroContent = () => {
    return (

        <div className={styles.headerWrapper}>
            <div className={styles.illustrationWrapper}>
            <img className={styles.illustration} src={illustration} alt="illustration" ></img>
        </div>
        <div className={styles.description}>
            <h1>"Kto czyta ksiązki <br></br> zyje podwójnie"</h1>
            <Link to="searching">
            <button className={styles.btn}>wyszukaj ksiązkę</button>
            </Link>
        </div>
        </div>
    )
}

export default HeroContent