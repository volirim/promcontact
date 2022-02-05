import PhoneLink from "../PhoneLink/PhoneLink";
import styles from "./Contacts.module.css"


const ContactsBlock = ()=>{
    return(
        <div className={styles.container}>
            <div className={styles.topContainer}>
                <div>
                    <h3>Контакты</h3>
                    <p>308015 РФ, г. Белгород <br></br> ул. Гостенская, д.5А офис 6</p>
                    <PhoneLink style="phoneLink" />
                </div>
                <form className={styles.form}>
                    <p>Обратная связь</p>
                    <input type="text" placeholder="Имя" className={styles.input}></input>
                    <input type="email" placeholder="Email" className={styles.input}></input>
                    <textarea placeholder="Оставьте сообщение" className={styles.textArea}></textarea>
                    <button className={styles.button}>Отправить</button>
                </form>
                <div>
                    <h3>Часы работы</h3>
                    <p>ПН-ПТ: 9:00-18:00</p>
                    <p>СБ: 10:00-14:00</p>
                    <p>ВС: выходной</p>
                </div>
            </div>
        </div>
    )
}

export default ContactsBlock;