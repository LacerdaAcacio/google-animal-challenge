import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { StyledSearchInput } from "../styles";
import { SearchFieldProps } from "../../../types/PropsData";

function SearchField({ form, handleSearchSubmit }: SearchFieldProps) {
  const watchedSearchValue = form.watch("search");
  const hasSearchValue = Boolean(watchedSearchValue);

  return (
    <div
      style={{
        position: "relative",
        display: "inline-block",
        margin: "25px",
      }}
    >
      <AiOutlineSearch
        style={{
          position: "absolute",
          left: "10px",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      />
      {hasSearchValue && (
        <AiOutlineClose
          style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            cursor: "pointer",
          }}
          onClick={() => form.setValue("search", "")}
        />
      )}
      <StyledSearchInput
        type="text"
        placeholder="Pesquise sobre animais"
        {...form.register("search")}
        style={{
          paddingLeft: "30px",
          paddingRight: "30px",
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearchSubmit();
          }
        }}
      />
    </div>
  );
}
export default SearchField;
