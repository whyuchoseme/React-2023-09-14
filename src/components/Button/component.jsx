import classNames from "classnames";
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

import styles from "./styles.module.css"

export const Button = ({ title, onClick, disabled, className }) => {
    const { theme } = useContext(ThemeContext);
    
    return (
        <button
            className={classNames(className)}
            onClick={onClick}
            disabled={disabled}
        >
            {title}
        </button>
    )
}