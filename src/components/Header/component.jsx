import classNames from "classnames"
import { useTheme } from "../../contexts/ThemeContext"
import { Button } from "../Button/component"
import styles from "./styles.module.css"

export const Header = ({ className }) => {
    const {switchTheme} = useTheme();

    return (
        <header className={classNames(styles.root, className)}>
            Header
            <Button
                    className={styles.switchBtn}
                    onClick={switchTheme}
                >
                    SwitchTheme
                </Button>
        </header>
    )
    
}