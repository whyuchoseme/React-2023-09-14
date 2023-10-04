import classNames from "classnames"
import { Button } from "../Button/component"
import styles from "./styles.module.css"

export const Tab = ({ title, onClick, className, isActive}) => {

    return (
        <Button 
            className={classNames(className, styles.root, {
                [styles.active]: isActive,
            })}
            title={title}
            onClick={onClick}
        />
    ) 
}