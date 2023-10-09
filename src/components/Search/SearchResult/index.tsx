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
  // const [cardInfo, setCardInfo] = useState<AnimalsInfoData[]>([]);

  const handleCardInfo = () => {
    setHiddenDescription((oldValue: boolean) => !oldValue);
    // setCardInfo(cardInfo);
  };

  return (
    <>
      <SearchResultContainer key={id}>
        <ResultLink>{url}</ResultLink>
        {/* <button type="button" onClick={handleCardInfo}> */}
        <ResultTitle onClick={handleCardInfo}>{name}</ResultTitle>
        {/* </button> */}
        <ResultDescription>{description}</ResultDescription>
        {/* <img src={url} alt={name} /> */}
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
