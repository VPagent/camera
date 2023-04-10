import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";
import _ from "lodash";

const VideoContext = createContext({
  image: "",
  setImage: _.noop,
  webCamRef: _.noop,
  createPhoto: _.noop,
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
    //@ts-ignore
    <VideoContext.Provider value={{ image, setImage, webCamRef, createPhoto }}>
      {children}
    </VideoContext.Provider>
  );
};

const useVideoContext = () => {
  return useContext(VideoContext);
};

export default useVideoContext;
