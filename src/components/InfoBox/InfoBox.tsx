import { FC, ReactNode } from "react";
import cn from "clsx";
import styles from "./InfoBox.module.scss";

type Props = {
  children: ReactNode;
  className?: any;
};

const InfoBox: FC<Props> = ({ children, className }) => {
  return <div className={cn(styles.component, className)}>{children}</div>;
};

export default InfoBox;
