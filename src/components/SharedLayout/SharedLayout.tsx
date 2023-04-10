import { FC, useEffect } from "react";
import cn from "clsx";
import usePageContext from "../../contexts/PageContext/PageContext";
import useVideoContext from "../../contexts/VideoContext/VideoContext";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import Container from "../Container/Container";
import CountPageBox from "../CountPageBox/CountPageBox";
import Loader from "../Loader/Loader";
import styles from "./SharedLayout.module.scss";
import takePhoto from "../../images/icons/takePhoto.png";
import info from "../../images/icons/info.png";
import next from "../../images/icons/next.png";
import share from "../../images/icons/share.png";
import takePhotoSec from "../../images/icons/takePhotoSec.png";
import WarningBox from "../WarningBox/WarningBox";
import ErrorBox from "../ErrorBox/ErrorBox";

type Props = {
  children: any;
};

const SharedLayout: FC<Props> = ({ children }) => {
  const { image, setImage, createPhoto } = useVideoContext();

  const {
    page,
    setPage,
    isLoading,
    setIsLoading,
    showWarning,
    setShowWarning,
    isError,
  } = usePageContext();

  useEffect(() => {
    setIsLoading(true);
  }, [page]);

  const onReturnClick = () => {
    setImage("");
    setPage(1);
  };

  const onCreatePhoto = () => {
    if (page === 1) {
      createPhoto();
      setPage(2);
      return;
    }
    if (page === 2) {
      setPage(3);
    }

    if (page === 3) {
      setPage(4);
    }

    if (page === 4) {
      setPage(1);
      setImage("");
    }
  };

  const onToggleWarningBox = () => {
    setShowWarning(!showWarning);
  };

  return (
    <div className={styles.component}>
      <Container>
        <div
          className={styles.pageContainer}
          style={isLoading ? { height: 500 } : {}}
        >
          {children}
          {isLoading && <Loader />}
          {!isLoading && showWarning && (
            <WarningBox onToggle={onToggleWarningBox} />
          )}
          {isError && <ErrorBox />}
        </div>

        <div className={styles.controls}>
          <ButtonIcon
            className={cn(styles.btn, styles.rephotoBtn)}
            icon={<img src={takePhotoSec} className={styles.rephotoIcon} />}
            onClick={onReturnClick}
            disabled={isLoading || page === 1 || page === 4}
          />
          <div className={styles.controlsCenterBox}>
            <CountPageBox page={page} />
            <ButtonIcon
              className={cn(styles.btn, styles.takePhotoBtn)}
              onClick={onCreatePhoto}
              icon={
                !image || page === 4 ? (
                  <img
                    src={takePhoto}
                    className={styles.takePhotoIcon}
                    alt="photo1"
                  />
                ) : (
                  <img
                    src={next}
                    className={styles.takePhotoIcon}
                    alt="photo2"
                  />
                )
              }
              disabled={isLoading}
            />
          </div>
          <div>
            <ButtonIcon
              className={cn(styles.btn, styles.uploadBtn)}
              onClick={() => {}}
              icon={<img src={share} className={styles.uploadIcon} />}
              disabled={isLoading || page === 1 || page === 4}
            />
            <ButtonIcon
              onClick={() => onToggleWarningBox()}
              className={cn(styles.btn, styles.infoBtn)}
              icon={<img src={info} className={styles.infoIcon} />}
              disabled={isLoading}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SharedLayout;
