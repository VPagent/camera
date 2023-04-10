import _ from "lodash";
import { createContext, useContext, useState } from "react";

const PageContext = createContext({
  page: 1,
  setPage: _.noop,
  isLoading: false,
  setIsLoading: _.noop,
  showWarning: false,
  setShowWarning: _.noop,
  isError: false,
  setIsError: _.noop,
});

export const PageProvider = ({ children }: any) => {
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <PageContext.Provider
      value={{
        page,
        setPage,
        isLoading,
        setIsLoading,
        showWarning,
        setShowWarning,
        isError,
        setIsError,
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
