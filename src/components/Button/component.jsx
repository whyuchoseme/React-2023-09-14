import styles from "./styles.module.css";
import classNames from "classnames";
import { useTheme } from "../../contexts/ThemeContext";

export const Button = ({
  children,
  onClick,
  disabled,
  className,
  type,
  viewVariant,
}) => {
  const { theme } = useTheme();

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        className,
        styles[type],
        styles[viewVariant],
        styles[theme],
        {
          [styles.disabled]: disabled,
        }
      )}
    >
      {children}
    </button>
  );
};
