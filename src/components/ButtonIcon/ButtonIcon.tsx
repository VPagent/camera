import { FC } from "react";
import cn from "clsx";
import styles from "./ButtonIcon.module.scss";

type Props = {
  className?: string;
  onClick: Function;
  icon?: any;
  label?: any;
  disabled?: boolean;
};

const ButtonIcon: FC<Props> = ({
  className,
  onClick,
  icon,
  label,
  disabled,
}) => {
  return (
    <button
      type="button"
      onClick={() => onClick()}
      className={cn(styles.btn, className)}
      disabled={disabled}
    >
      {icon && icon}
      {label && label}
    </button>
  );
};

export default ButtonIcon;
