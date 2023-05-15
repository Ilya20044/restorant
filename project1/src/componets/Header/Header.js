import styles from "./Header.module.css"
import {Logo} from "./Logo/Logo"
import {Founder} from "./Founder/Founder"
import {Contact} from "./Contact/Contact"
import {Basket} from "./Basket/Basket"


export const Header = ()=>{
    return(
        <div className={styles.header}>
            <Logo/>
            <Founder/>
            <Contact/>
            <Basket/>
        </div>
    )
}