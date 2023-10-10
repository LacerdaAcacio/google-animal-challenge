import { useForm } from "react-hook-form";
import useSearch from "../../../hooks/useSearch";
import SearchField from "../../Search/SearchField";
import { SearchFormDataProps } from "../../../types/PropsData";

function SearchForm({ hideButton, isHeader }: SearchFormDataProps) {
  const { generateAnimalTypeList, handleSearch } = useSearch();
  const form = useForm();
  const animals = generateAnimalTypeList();

  const handleSearchSubmit = () => {
    handleSearch(form.getValues("search"), animals);
  };

  return (
    <>
      <SearchField
        form={form}
        isHeader={isHeader}
        handleSearchSubmit={handleSearchSubmit}
      />
      {!hideButton && (
        <button type="submit" onClick={handleSearchSubmit}>
          Buscar
        </button>
      )}
    </>
  );
}
export default SearchForm;
