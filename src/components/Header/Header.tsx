import { Link } from "react-router-dom";
import nameLogo from "../../assets/images/nameLogo.png"
import schemeLogo from "../../assets/images/schemeLogo.png"
import styles from "./Header.module.css"

const Header = () =>{
    return(
        <div className={styles.container}>
            <div className={styles.logoWrapper}>
                <img src={nameLogo} alt="Logo"></img>
                <img src={schemeLogo} alt="Logo"></img>
            </div>
            <div className={styles.menuContainer}>
                <Link to="/" className={styles.menuItem}>Главная</Link>
                <Link to="/" className={styles.menuItem}>Товары</Link>
                <Link to="/contacts" className={styles.menuItem}>Контакты</Link>
            </div>
        </div>
    )
}

export default Header;