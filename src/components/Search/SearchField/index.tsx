import {
  StyledCloseIcon,
  StyledSearchFieldContainer,
  StyledSearchIcon,
  StyledSearchInput,
} from "../styles";
import { SearchFieldProps } from "../../../types/PropsData";
import { LABELS } from "../../../constants";

function SearchField({ form, handleSearchSubmit, isHeader }: SearchFieldProps) {
  const watchedSearchValue = form.watch("search");
  const hasSearchValue = Boolean(watchedSearchValue);

  return (
    <StyledSearchFieldContainer>
      <StyledSearchIcon />
      {hasSearchValue && (
        <StyledCloseIcon onClick={() => form.setValue("search", "")} />
      )}
      <StyledSearchInput
        isHeader={isHeader}
        type="text"
        placeholder={LABELS.SEARCH}
        {...form.register("search")}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearchSubmit();
          }
        }}
      />
    </StyledSearchFieldContainer>
  );
}

export default SearchField;
