import { useState, useMemo, ReactNode } from "react";
// import { useLocation } from "react-router-dom";
import HiddenSearchContext from "../HiddenSearchContext";

function HiddenSearchProvider({ children }: { children: ReactNode }) {
  // const { pathname } = useLocation();
  const [hiddenSearchValue, setHiddenSearch] = useState(true);

  const contextValue = useMemo(() => {
    // if (pathname === "/search") setHiddenSearch(true);
    // if (pathname === "/") setHiddenSearch(false);
    return { hiddenSearch: hiddenSearchValue, setHiddenSearch };
  }, [hiddenSearchValue]);

  return (
    <HiddenSearchContext.Provider value={contextValue}>
      {children}
    </HiddenSearchContext.Provider>
  );
}

export default HiddenSearchProvider;
