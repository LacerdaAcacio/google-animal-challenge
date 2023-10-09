import { useState, useMemo, ReactNode } from "react";
import HiddenSearchContext from "../HiddenSearchContext";

function HiddenSearchProvider({ children }: { children: ReactNode }) {
  const [hiddenSearchValue, setHiddenSearch] = useState(true);

  const contextValue = useMemo(() => {
    return { hiddenSearch: hiddenSearchValue, setHiddenSearch };
  }, [hiddenSearchValue]);

  return (
    <HiddenSearchContext.Provider value={contextValue}>
      {children}
    </HiddenSearchContext.Provider>
  );
}

export default HiddenSearchProvider;
