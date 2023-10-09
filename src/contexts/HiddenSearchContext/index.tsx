// // contexts/HiddenSearchContext.tsx
// import React, { createContext, useContext, useState, ReactNode, useMemo } from "react";

// interface HiddenSearchContextProps {
//   hiddenSearch: boolean;
//   setHiddenSearch: React.Dispatch<React.SetStateAction<boolean>>;
// }

// const HiddenSearchContext = createContext<HiddenSearchContextProps | undefined>(
//   undefined,
// );

// // Esta é uma variável, não um componente funcional
// const hiddenSearch: boolean = true;

// export function HiddenSearchProvider({ children }: { children: ReactNode }) {
//   const [hiddenSearchValue, setHiddenSearch] = useState(hiddenSearch);

//   const contextValue = useMemo(() => {
//     return { hiddenSearch: hiddenSearchValue, setHiddenSearch };
//   }, [hiddenSearchValue]);

//   return (
//     <HiddenSearchContext.Provider value={contextValue}>
//       {children}
//     </HiddenSearchContext.Provider>
//   );
// }
// export const useHiddenSearch = (): HiddenSearchContextProps => {
//   const context = useContext(HiddenSearchContext);
//   if (!context) {
//     throw new Error(
//       "useHiddenSearch deve ser usado dentro de um HiddenSearchProvider",
//     );
//   }
//   return context;
// };

import { createContext } from "react";
import { HiddenSearchContextProps } from "../../types/PropsData";

const HiddenSearchContext = createContext<HiddenSearchContextProps | undefined>(
  undefined,
);

export default HiddenSearchContext;
