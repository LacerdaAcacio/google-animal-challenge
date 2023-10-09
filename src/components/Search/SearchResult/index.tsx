import { useState } from "react";
import { AnimalsInfoData } from "../../../types/AnimalsInfoData";
import {
  ResultDescription,
  ResultLink,
  ResultTitle,
  SearchResultContainer,
} from "../styles";
import SearchCard from "../SearchCard";

function SearchResult({ description, name, url, id, image }: AnimalsInfoData) {
  const [hiddenDescription, setHiddenDescription] = useState(true);

  const handleCardInfo = () => {
    setHiddenDescription((oldValue: boolean) => !oldValue);
  };

  return (
    <>
      <SearchResultContainer key={id}>
        <ResultLink>{url}</ResultLink>
        <ResultTitle onClick={handleCardInfo}>{name}</ResultTitle>
        <ResultDescription>{description}</ResultDescription>
      </SearchResultContainer>
      <SearchCard
        description={description}
        name={name}
        url={url}
        id={id}
        hidden={hiddenDescription}
        image={image}
      />
    </>
  );
}

export default SearchResult;
