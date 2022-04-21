import styles from "./Menu.module.css";

const Menu = ({}) => {
    return(
        <div className={styles.bar}>Home About me Projects <div className={styles.secondBar}>Email</div></div>
    )
}

export default Menu;