// import { useState } from "react";
import { AnimalsInfoData } from "../../../types/AnimalsInfoData";
import {
  ResultDescription,
  ResultLink,
  ResultTitle,
  SearchResultContainer,
} from "../styles";
// import SearchCard from "../SearchCard";
import { SearchResultProps } from "../../../types/PropsData";

function SearchResult({
  description,
  name,
  url,
  id,
  image,
  onSelect,
}: SearchResultProps) {
  // const [hiddenDescription, setHiddenDescription] = useState(true);
  const props: AnimalsInfoData = { description, name, url, id, image };

  // const handleCardInfo = () => {
  //   setHiddenDescription((oldValue: boolean) => !oldValue);
  // };

  return (
    <>
      <SearchResultContainer key={id}>
        <ResultLink>{url}</ResultLink>
        {/* <ResultTitle onClick={handleCardInfo}>{name}</ResultTitle> */}
        <ResultTitle onClick={() => onSelect(props)}>{name}</ResultTitle>
        <ResultDescription>{description}</ResultDescription>
      </SearchResultContainer>
      {/* <SearchCard
        description={description}
        name={name}
        url={url}
        id={id}
        hidden={hiddenDescription}
        image={image}
      /> */}
    </>
  );
}

export default SearchResult;
