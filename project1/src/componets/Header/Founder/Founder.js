import styles from "./Founder.module.css"
import map from "../../assets/images/map.svg"
import mapRound from "../../assets/images/mapRound.svg"
import round from "../../assets/images/round.svg"
import line from "../../assets/images/line.svg"


export const Founder = () =>{
    return(
        <>
        <div className={styles.founder}>
            <div className={styles.mapBlock}>
                <img src={map} className={styles.map}/>
                <img src={mapRound} className={styles.mapRound}/>
           </div>
            <input type={'text'} placeholder={'Введите адрес доставки'} className={styles.input}/>
           <div className={styles.glass}>
                <img src={round} className={styles.round}/>
                <img src={line}className={styles.line}/>
           </div>
        </div>
        </>
    )
}