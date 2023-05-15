import {Link} from "react-router-dom"
import styles from "./Navigation.module.css"


export const Navigation =()=>{
    return(
        <>
        <nav className={styles.nav}>
            <Link to={'/cold'} className={styles.link}>Холодные закуски</Link>
            <Link to={'/hot'}className={styles.link}>Горячие закуски</Link>
            <Link to={'/meat'}className={styles.link}>Мясные блюда </Link>
            <Link to={'/soup'}className={styles.link}>Супы </Link>
            <Link to={'/fish'}className={styles.link}>Рыбные блюда </Link>
            <Link to={'/gril'}className={styles.link}>Блюда на грле </Link>
            <Link to={'/firm'}className={styles.link}>Фирменные блюда </Link>
            <Link to={'/drinks'}className={styles.link}>Напитки </Link>
        </nav>
        </>
    )
}