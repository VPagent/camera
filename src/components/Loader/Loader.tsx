import { FC } from "react";
import { Oval } from "react-loader-spinner";
import styles from "./Loader.module.scss";

const Loader: FC = () => {
  return (
    <Oval
      height={80}
      width={80}
      color="#ffe600"
      //   wrapperStyle={{}}
      wrapperClass={styles.loader}
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#e4db97"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
};

export default Loader;
