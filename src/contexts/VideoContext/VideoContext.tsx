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
  const webCamRef = useRef(null);

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
