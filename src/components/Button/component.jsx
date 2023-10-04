export const Button = ({ title, onClick, disabled, className }) => {
    
    return (
        <button
            className={className}
            onClick={onClick}
            disabled={disabled}
        >
            {title}
        </button>
    )
}