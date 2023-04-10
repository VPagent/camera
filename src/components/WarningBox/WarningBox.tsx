import { FC } from "react";
import cn from "clsx";
import InfoBox from "../InfoBox/InfoBox";
import styles from "./WarningBox.module.scss";
import ButtonIcon from "../ButtonIcon/ButtonIcon";

type Props = {
  className?: any;
  onToggle: any;
};
const WarningBox: FC<Props> = ({ className, onToggle }) => {
  return (
    <div className={cn(styles.backDrop, className)}>
      <InfoBox className={styles.infoBox}>
        <p className={styles.text}>
          "This service does not collect or store any user metadata. We do not
          track or monitor user activity, nor do we collect any information
          about user behavior or preferences."
        </p>
        <ButtonIcon
          onClick={() => onToggle()}
          label="Got It"
          className={styles.gotItbtn}
        />
      </InfoBox>
    </div>
  );
};

export default WarningBox;
