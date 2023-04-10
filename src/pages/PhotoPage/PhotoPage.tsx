import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import usePageContext from "../../contexts/PageContext/PageContext";
import useVideoContext from "../../contexts/VideoContext/VideoContext";
import styles from "./PhotoPage.module.scss";

const PhotoPage: FC = () => {
  const { image } = useVideoContext();
  const { page, setPage, isLoading, setIsLoading } = usePageContext();

  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!image) {
  //     navigate("/");
  //   }
  // }, []);

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
