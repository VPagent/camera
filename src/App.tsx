import { FC, useState } from "react";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import usePageContext from "./contexts/PageContext/PageContext";
import StartPage from "./pages/StartPage/StartPage";
import PhotoPage from "./pages/PhotoPage/PhotoPage";

import styles from "./App.module.scss";
import ThirdPage from "./pages/ThirdPage/ThirdPage";
import FirstPage from "./pages/FirstPage/FirstPage";

const App: FC = () => {
  const { page } = usePageContext();
  return (
    <div className={styles.App}>
      <SharedLayout>
        {page === 1 && <StartPage />}
        {page === 2 && <FirstPage />}
        {page === 3 && <PhotoPage />}
        {page === 4 && <ThirdPage />}
      </SharedLayout>
    </div>
  );
};

export default App;
