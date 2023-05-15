import styles from "./Basket.module.css"



export const Basket =()=>{
    return(
       <div className={styles.basket}>
            <p className={styles.text}>Корзина</p>
            <div className={styles.outline}></div>
            <span className={styles.number}>4</span>
       </div> 
    )
}