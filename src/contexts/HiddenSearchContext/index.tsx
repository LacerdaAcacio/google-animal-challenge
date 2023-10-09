import { createContext } from "react";
import { HiddenSearchContextProps } from "../../types/PropsData";

const HiddenSearchContext = createContext<HiddenSearchContextProps | undefined>(
  undefined,
);

export default HiddenSearchContext;
