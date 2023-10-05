import classNames from "classnames"
import { Button } from "../Button/component"
import styles from "./styles.module.css"

export const Tab = ({ title, onClick, className }) => {

    return (
        <Button 
            className={classNames(styles.root, className)}
            children={title}
            onClick={onClick}
        />
    ) 
}