import { useContext } from "react";
import HiddenSearchContext from "../../contexts/HiddenSearchContext";
import { HiddenSearchContextProps } from "../../types/PropsData";

const useHiddenSearch = (): HiddenSearchContextProps => {
  const context = useContext(HiddenSearchContext);
  if (!context) {
    throw new Error(
      "useHiddenSearch deve ser usado dentro de um HiddenSearchProvider",
    );
  }
  return context;
};

export default useHiddenSearch;
