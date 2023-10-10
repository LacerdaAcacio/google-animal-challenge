import { AnimalsInfoData } from "./AnimalsInfoData.d";

export interface FooterProps extends CustomFooterProps {
  label?: string;
  version?: string;
  showCopyRight?: boolean;
}

export interface RouteProps {
  path: string;
  Component: () => ReactNode;
}

export interface SearchCardProps extends AnimalsInfoData {
  hidden?: boolean;
}

export interface HeaderProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  hiddenSearch?: boolean;
  srcAvatar?: string;
  altAvatar?: string;
}

export interface HiddenSearchContextProps {
  hiddenSearch: boolean;
  setHiddenSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface HandleSearchProps {
  searchValue: string;
  animals: AnimalList;
}

export interface SearchFieldProps {
  form: UseFormMethods<SearchFieldData>;
  handleSearchSubmit: () => void;
  isHeader?: boolean;
}

export interface SearchFormDataProps {
  hideButton?: boolean;
  isHeader?: boolean;
}

export interface SearchResultProps extends AnimalsInfoData {
  onSelect: (AnimalsInfoData) => void;
}

export interface NotFoundProps {
  label: string;
  boldLabel: string;
}
