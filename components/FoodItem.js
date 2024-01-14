import styles from './FoodItem.module.css'

export default function FoodItem() {
    return (
        <>
            <div className={styles.foodItem}>
                <img src="/spaghetti.png" alt="food" className={styles.logo}/>
                <span className={styles.foodName}>example name</span>
                <span className={styles.foodCal}>000 cal</span>
            </div>
        </>
    )

}