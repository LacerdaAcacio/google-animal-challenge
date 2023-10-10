import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
// import { StyledSearchPageContainer } from "../../styles/styles";
import SearchResult from "../../components/Search/SearchResult";
import { AnimalsInfoData } from "../../types/AnimalsInfoData";
import useHiddenSearch from "../../hooks/contexts/useHiddenSearch";
import SearchCard from "../../components/Search/SearchCard";
import ResultNotFound from "../../components/Search/SearchResult/ResultNotFound";
import { LABELS } from "../../constants";

function SearchPage() {
  const location = useLocation();
  const { setHiddenSearch } = useHiddenSearch();

  const [selectedResult, setSelectedResult] = useState<AnimalsInfoData | null>(
    null,
  );

  const filteredAnimals = location?.state?.animalData;
  const searchValue = location?.state?.searchValue;
  const hasFilteredAnimals = Boolean(filteredAnimals?.length > 0);
  const hasSearchValue = Boolean(searchValue);
  const handleSelectResult = (result: AnimalsInfoData) => {
    setSelectedResult(result);
  };

  useEffect(() => {
    // console.log(location);
    setHiddenSearch(false);
  }, [setHiddenSearch]);

  // return (
  //   <StyledSearchPageContainer>
  //     {hasFilteredAnimals ? (
  //       filteredAnimals.map((filteredAnimal: AnimalsInfoData) => {
  //         return <SearchResult key={filteredAnimal.id} {...filteredAnimal} />;
  //       })
  //     ) : (
  //       <h1>No results found</h1>
  //     )}
  //   </StyledSearchPageContainer>
  // );
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "100%",
          padding: "20px",
        }}
      >
        {hasSearchValue ? (
          <div style={{ width: "65%" }}>
            {filteredAnimals.map((filteredAnimal: AnimalsInfoData) => (
              <SearchResult
                key={filteredAnimal.id}
                {...filteredAnimal}
                onSelect={handleSelectResult}
              />
            ))}
          </div>
        ) : (
          <ResultNotFound
            label={LABELS.TRY_LOOKING}
            boldLabel={`'${LABELS.ANIMAL_OPTIONS}'`}
          />
        )}
        {/* Parte superior com o card selecionado */}
        {selectedResult && (
          // <div style={{ flexGrow: 4 }}>
          <div style={{ width: "30%" }}>
            <SearchCard {...selectedResult} />
          </div>
        )}
      </div>
      {!hasFilteredAnimals && (
        <>
          <ResultNotFound
            label={LABELS.NO_RESULTS}
            boldLabel={`'${searchValue}'`}
          />{" "}
          <ResultNotFound
            label={LABELS.TRY_LOOKING}
            boldLabel={`'${LABELS.ANIMAL_OPTIONS}'`}
          />
        </>
      )}
    </>
  );
}

export default SearchPage;
