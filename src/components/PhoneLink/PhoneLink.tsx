import styles from "./PhoneLink.module.css"

interface PhoneLink {
    style: string;
}

const PhoneLink= ({style}: PhoneLink)=> <a href="tel: +79103217021" className={style}>+79103217021</a>
   

export default PhoneLink;
