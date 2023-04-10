import _ from "lodash";
import { createContext, useContext, useState } from "react";

const PageContext = createContext({
  page: 1,
  setPage: _.noop,
  isLoading: false,
  setIsLoading: _.noop,
  showWarning: false,
  setShowWarning: _.noop,
});

export const PageProvider = ({ children }: any) => {
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  return (
    <PageContext.Provider
      value={{
        page,
        setPage,
        isLoading,
        setIsLoading,
        showWarning,
        setShowWarning,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};

const usePageContext = () => {
  return useContext(PageContext);
};

export default usePageContext;
