import { Button } from "../Button/component"

export const Tab = ({ children, onClick, className }) => {

    return (
        <Button 
            className={className}
            onClick={onClick}
            viewVariat = 'rootTab'
        >
            {children}
        </Button>
    ) 
}