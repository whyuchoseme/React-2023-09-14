import { Button } from "../Button/component"

export const Tabs = ({ name, onClick }) => {

    return (
        <Button title={name} onClick={onClick} />
    ) 
}