import { FC } from "react";
import styles from "./CountPageBox.module.scss";

type Props = {
  page: number;
};

const CountPageBox: FC<Props> = ({ page }) => {
  const currentPage = page === 1 ? "0" : page - 1;
  return (
    <div className={styles.component}>
      <p className={styles.text}>{currentPage} / 3</p>
    </div>
  );
};

export default CountPageBox;
