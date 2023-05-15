import styles from "./Contact.module.css"
import phone from "../../assets/images/phone.svg"


export const Contact = ()=>{
    return(
        <div className={styles.contact}>
           <img src={phone} className={styles.phoneImg}/>
           <div className={styles.contactText}>
             <p className={styles.text}>Контакты:</p>
             <p className={styles.number}>+7 (917) 510-57-59</p>
           </div>
        </div>
    )
}