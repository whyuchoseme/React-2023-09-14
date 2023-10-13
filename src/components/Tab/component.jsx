import { Button } from "../Button/component";

export const Tab = ({ children, onClick, className, isActive }) => {
  return (
    <Button
      onClick={onClick}
      className={className}
      type="tabButton"
      viewVariant={isActive ? "active" : false}
    >
      {children}
    </Button>
  );
};
