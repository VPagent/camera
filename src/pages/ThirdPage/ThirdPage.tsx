import { FC, useEffect, useState } from "react";
import ButtonIcon from "../../components/ButtonIcon/ButtonIcon";
import InfoBox from "../../components/InfoBox/InfoBox";
import usePageContext from "../../contexts/PageContext/PageContext";
import useVideoContext from "../../contexts/VideoContext/VideoContext";
import styles from "./ThirdPage.module.scss";

const ThirdPage: FC = () => {
  const { image } = useVideoContext();
  const { isLoading, setIsLoading, showWarning, setShowWarning } =
    usePageContext();

  useEffect(() => {
    if (isLoading) {
      setIsLoading(false);
      setShowWarning(true);
    }
  }, [isLoading]);

  return (
    <div className={styles.component}>
      <img src={image} alt="userPhoto" className={styles.userPhoto} />
    </div>
  );
};

export default ThirdPage;
