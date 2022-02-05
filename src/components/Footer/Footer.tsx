import PhoneLink from "../PhoneLink/PhoneLink";
import styles from "./Footer.module.css"

const Footer = ()=>{
    return(
        <div className={styles.container}>
            <PhoneLink style="phoneLinkFooter"/>
            <p className={styles.copyright}>​©2022 ПРОМКОНТАКТ.</p>
        </div>
    )
}

export default Footer;