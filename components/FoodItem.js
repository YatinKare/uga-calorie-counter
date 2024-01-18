import styles from './FoodItem.module.css'

export default function FoodItem({ name, cal }) {
    return (
        <>
            <div className={styles.foodItem}>
                <img src="/spaghetti.png" alt="food" className={styles.logo}/>
                <span className={styles.foodName}>{name}</span>
                <span className={styles.foodCal}>{cal} cal</span>
            </div>
        </>
    )
}