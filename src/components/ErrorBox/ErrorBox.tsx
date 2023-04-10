import { FC } from "react";
import InfoBox from "../InfoBox/InfoBox";
import styles from "./ErrorBox.module.scss";

const ErrorBox: FC = () => {
  return (
    <InfoBox className={styles.component}>
      <p>
        Sorry, but in order to use this application you must open access to the
        camera on your device
      </p>
    </InfoBox>
  );
};

export default ErrorBox;
