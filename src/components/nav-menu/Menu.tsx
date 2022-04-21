import styles from "./Menu.module.css";
const MENU_ITEMS = ["Home", "About me", "Projects"]
const SECOND_MENU_ITEMS = ["Email"]

const Menu = ({}) => {
    return(
        <div className={styles.bar}>
            {MENU_ITEMS.map((item: string) => (<span key={item}>{item} </span>))}
            <hr/>
            {SECOND_MENU_ITEMS.map((item: string) => (<span key={item}>{item} </span>))}
        </div>
    )
}

export default Menu;