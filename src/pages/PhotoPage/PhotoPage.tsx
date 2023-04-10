import { FC, useEffect } from "react";
import usePageContext from "../../contexts/PageContext/PageContext";
import useVideoContext from "../../contexts/VideoContext/VideoContext";
import styles from "./PhotoPage.module.scss";

const PhotoPage: FC = () => {
  const { image } = useVideoContext();
  const { setIsLoading } = usePageContext();

  useEffect(() => {
    const setLoader = () => {
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    };

    setLoader();
  }, []);

  return (
    <div className={styles.component}>
      <img src={image} alt="userPhoto" className={styles.userPhoto} />
    </div>
  );
};

export default PhotoPage;
