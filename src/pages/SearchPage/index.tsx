import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { SearchPageContainer } from "../../styles/styles";
import SearchResult from "../../components/Search/SearchResult";
import { AnimalsInfoData } from "../../types/AnimalsInfoData";
import useHiddenSearch from "../../hooks/contexts/useHiddenSearch";

function SearchPage() {
  const location = useLocation();
  const { setHiddenSearch } = useHiddenSearch();
  const filteredAnimals = location?.state?.animalData;
  const hasFilteredAnimals = Boolean(filteredAnimals?.length > 0);

  useEffect(() => {
    setHiddenSearch(false);
  }, [setHiddenSearch]);

  return (
    <SearchPageContainer>
      {hasFilteredAnimals &&
        filteredAnimals.map((filteredAnimal: AnimalsInfoData) => {
          return <SearchResult key={filteredAnimal.id} {...filteredAnimal} />;
        })}
    </SearchPageContainer>
  );
}

export default SearchPage;
