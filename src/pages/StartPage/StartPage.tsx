import { FC, useEffect } from "react";
import Webcam from "react-webcam";
import InfoBox from "../../components/InfoBox/InfoBox";
import usePageContext from "../../contexts/PageContext/PageContext";
import useVideoContext from "../../contexts/VideoContext/VideoContext";
import styles from "./StartPage.module.scss";
import scanBorder from "../../images/icons/scanBorder.png";

const StartPage: FC = () => {
  const { image, webCamRef } = useVideoContext();
  // const { page, setPage, isLoading, setIsLoading } = usePageContext();
  const { isLoading, setIsLoading } = usePageContext();

  const videoConstraints = {
    width: 400,
    height: 500,
    facingMode: "user",
  };

  return (
    <>
      <div className={styles.component}>
        <div className={styles.videoBox}>
          <Webcam
            className={styles.video}
            audio={false}
            screenshotFormat="image/jpeg"
            //@ts-ignore
            ref={!image && webCamRef}
            videoConstraints={videoConstraints}
            onUserMedia={() => setIsLoading(false)}
          />

          {!isLoading && (
            <>
              <img src={scanBorder} className={styles.borderCameraIcon} />
              <InfoBox>
                <p className={styles.infoText}>Who is this cutest kitty?</p>
              </InfoBox>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default StartPage;
