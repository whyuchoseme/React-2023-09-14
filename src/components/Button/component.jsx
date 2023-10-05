import classNames from "classnames"
import styles from "./styles.module.css"

export const Button = ({ children, onClick, disabled, className }) => {
    
    return (
        <button
            className={classNames(className, {
                [styles.rootMinus]: children === '-' && disabled
            }, {
                [styles.rootPlus]: children === '+' && disabled
            })}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}