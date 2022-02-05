import sliderImage from "../assets/images/mainPage/sliderImage.png";
import ContactsBlock from "../components/Contacts/ContactsBlock";
import ListItem from "../components/pages/home/ListItem/ListItem";
import text from "../constants/MainPage/text";
import styles from "./Home.module.css"

const Home = ()=>{
    return (
    <div className="main-container">
        <div className={styles.container}>
            <p className={styles.text}>Ваш надежный поставщик<br /> электронных компонентов</p>
            <img src={sliderImage} alt="slider" className={styles.img} />
        </div>
        <div className={styles.list}>
            <h2>С КЕМ МЫ РАБОТАЕМ</h2>
            {text.map((element)=> <ListItem text={element} />)}
        </div>
        <ContactsBlock />

    </div>)
}

export default Home;