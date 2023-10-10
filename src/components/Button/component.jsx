import classNames from "classnames"
import { useTheme } from "../../contexts/ThemeContext"

import styles from "./styles.module.css"

export const Button = ({ children, onClick, disabled, className, viewVariat }) => {
    const { theme } = useTheme();
    
    return (
        <button
            className={classNames(className, {
                [styles.rootMinus]: children === '-' && disabled
            }, {
                [styles.rootPlus]: children === '+' && disabled
            }, {
                [styles.rootSwitch]: children === 'SwitchTheme'
            }, {
                [styles.rootSave]: children === 'Save review'
            },
            styles[viewVariat],
            styles[theme])}
            onClick={onClick}
            disabled={disabled}
            
        >
            {children}
        </button>
    )
}