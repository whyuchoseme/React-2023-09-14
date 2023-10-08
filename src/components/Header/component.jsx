import classNames from "classnames"
import { useContext } from "react"
import { Button } from "../Button/component"
import { ThemeContext } from "../context/ThemeContext"
import styles from "./styles.module.css"

export const Header = ({ className }) => {
    const {switchTheme} = useContext(ThemeContext);

    return (
        <header className={classNames(styles.root, className)}>
                Header
                <Button
                    className={styles.switchBtn}
                    title={'SwitchTheme'}
                    onClick={() => {switchTheme, console.log('Click!')}}
                >
                </Button>
        </header>
    )
}