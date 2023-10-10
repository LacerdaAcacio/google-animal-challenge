import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchResult from "../../components/Search/SearchResult";
import { AnimalsInfoData } from "../../types/AnimalsInfoData";
import useHiddenSearch from "../../hooks/contexts/useHiddenSearch";
import SearchCard from "../../components/Search/SearchCard";
import ResultNotFound from "../../components/Search/SearchResult/ResultNotFound";
import { LABELS } from "../../constants";
import {
  StyledLeftSection,
  StyledRightSection,
  StyledSearchContainer,
} from "../../styles/styles";

function SearchPage() {
  const location = useLocation();
  const { setHiddenSearch } = useHiddenSearch();

  const [selectedResult, setSelectedResult] = useState<AnimalsInfoData | null>(
    null,
  );

  const filteredAnimals = location?.state?.animalData || [];
  const searchValue = location?.state?.searchValue;
  const hasFilteredAnimals = filteredAnimals.length > 0;

  useEffect(() => {
    setHiddenSearch(false);
  }, [setHiddenSearch]);

  const handleSelectResult = (result: AnimalsInfoData) => {
    setSelectedResult(result);
  };

  return (
    <>
      <StyledSearchContainer>
        {searchValue ? (
          <StyledLeftSection>
            {filteredAnimals.map((animal: AnimalsInfoData) => (
              <SearchResult
                key={animal.id}
                {...animal}
                onSelect={handleSelectResult}
              />
            ))}
          </StyledLeftSection>
        ) : (
          <ResultNotFound
            label={LABELS.TRY_LOOKING}
            boldLabel={`'${LABELS.ANIMAL_OPTIONS}'`}
          />
        )}

        {selectedResult && (
          <StyledRightSection>
            <SearchCard {...selectedResult} />
          </StyledRightSection>
        )}
      </StyledSearchContainer>
      {!hasFilteredAnimals && (
        <>
          <ResultNotFound
            label={LABELS.NO_RESULTS}
            boldLabel={`'${searchValue}'`}
          />
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
