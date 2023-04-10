import { FC, useEffect } from "react";
import usePageContext from "../../contexts/PageContext/PageContext";
import useVideoContext from "../../contexts/VideoContext/VideoContext";
import styles from "./FirstPage.module.scss";

const FirstPage: FC = () => {
  const { image } = useVideoContext();
  const { setIsLoading } = usePageContext();

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  return (
    <div className={styles.component}>
      <img src={image} alt="userPhoto" className={styles.userPhoto} />
    </div>
  );
};

export default FirstPage;
