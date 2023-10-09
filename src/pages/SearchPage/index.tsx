import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
// import { SearchPageContainer } from "../../styles/styles";
import SearchResult from "../../components/Search/SearchResult";
import { AnimalsInfoData } from "../../types/AnimalsInfoData";
import useHiddenSearch from "../../hooks/contexts/useHiddenSearch";
import SearchCard from "../../components/Search/SearchCard";

function SearchPage() {
  const location = useLocation();
  const { setHiddenSearch } = useHiddenSearch();

  const [selectedResult, setSelectedResult] = useState<AnimalsInfoData | null>(
    null,
  );

  const filteredAnimals = location?.state?.animalData;
  // const hasFilteredAnimals = Boolean(filteredAnimals?.length > 0);

  const handleSelectResult = (result: AnimalsInfoData) => {
    setSelectedResult(result);
  };

  useEffect(() => {
    setHiddenSearch(false);
  }, [setHiddenSearch]);

  // return (
  //   <SearchPageContainer>
  //     {hasFilteredAnimals ? (
  //       filteredAnimals.map((filteredAnimal: AnimalsInfoData) => {
  //         return <SearchResult key={filteredAnimal.id} {...filteredAnimal} />;
  //       })
  //     ) : (
  //       <h1>No results found</h1>
  //     )}
  //   </SearchPageContainer>
  // );
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100%",
        padding: "20px",
      }}
    >
      {/* Parte inferior com os resultados */}
      {/* <div style={{ flexGrow: 6 }}> */}
      <div style={{ width: "65%" }}>
        {filteredAnimals.map((filteredAnimal: AnimalsInfoData) => (
          <SearchResult
            key={filteredAnimal.id}
            {...filteredAnimal}
            onSelect={handleSelectResult}
          />
        ))}
      </div>
      {/* Parte superior com o card selecionado */}
      {selectedResult && (
        // <div style={{ flexGrow: 4 }}>
        <div style={{ width: "30%" }}>
          <SearchCard {...selectedResult} />
        </div>
      )}
    </div>
  );
}

export default SearchPage;
