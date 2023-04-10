import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import _ from "lodash";

const VideoContext = createContext({
  image: "",
  setImage: _.noop,
  webCamRef: _.noop,
  createPhoto: _.noop,
  videoWidth: 100,
  videoHeight: 100,
  setVideoWidth: _.noop,
  setVideoHeight: _.noop,
});

export const VideoProvider = ({ children }: any) => {
  const [image, setImage] = useState("");
  const [videoWidth, setVideoWidth] = useState(Math.round(window.screen.width));
  const [videoHeight, setVideoHeight] = useState(
    Math.round((videoWidth / 4) * 5)
  );
  const webCamRef = useRef(null);

  useEffect(() => {
    setVideoWidth(Math.round(window.screen.width));
    setVideoHeight(Math.round((videoWidth / 4) * 5));
  }, [window.screen.width]);

  console.log("width", videoWidth, "height", videoHeight);

  const createPhoto = useCallback(() => {
    //@ts-ignore
    const imageSrc = webCamRef.current.getScreenshot();

    setImage(imageSrc);
  }, [webCamRef]);

  return (
    <VideoContext.Provider
      value={{
        image,
        setImage,
        //@ts-ignore
        webCamRef,
        createPhoto,
        videoWidth,
        videoHeight,
        setVideoWidth,
        setVideoHeight,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};

const useVideoContext = () => {
  return useContext(VideoContext);
};

export default useVideoContext;
