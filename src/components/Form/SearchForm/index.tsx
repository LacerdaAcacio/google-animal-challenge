import { useForm } from "react-hook-form";
import useSearch from "../../../hooks/useSearch";
import SearchField from "../../Search/SearchField";
import { SearchFormDataProps } from "../../../types/PropsData";

function SearchForm({ hideButton }: SearchFormDataProps) {
  const { generateAnimalTypeList, handleSearch } = useSearch();
  const form = useForm();
  const animals = generateAnimalTypeList();

  const handleSearchSubmit = () => {
    handleSearch(form.getValues("search"), animals);
  };

  return (
    <>
      <SearchField form={form} handleSearchSubmit={handleSearchSubmit} />
      {!hideButton && (
        <button type="submit" onClick={handleSearchSubmit}>
          Buscar
        </button>
      )}
    </>
  );
}
export default SearchForm;
