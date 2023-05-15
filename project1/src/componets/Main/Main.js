import styles from "./Main.module.css"




export const Main = ()=>{
    return(
        <div className={styles.main}>
            <div className={styles.mainText}>
                <p className={styles.text}>Доставка ВКУСНЕЙШИХ БЛЮД за 60 минут</p>
                <p className={styles.text1}>Ещё не пробовал?</p>
            </div>
        </div>
    )
}