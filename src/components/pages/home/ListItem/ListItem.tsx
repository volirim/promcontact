import ulImage from "../../../../assets/images/mainPage/ulImage.png"
import styles from "./ListItem.module.css"

interface ListItemInterface {
    text: string;
}

const ListItem = ({text}: ListItemInterface)=>{
    return(
        <div className={styles.container}>
            <img src={ulImage} alt="*"/>
            <p className={styles.text}>{text}</p>
        </div>
    )
}

export default ListItem;