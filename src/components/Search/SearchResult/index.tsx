// import { useState } from "react";
import { AnimalsInfoData } from "../../../types/AnimalsInfoData";
import {
  StyledResultDescription,
  StyledResultLink,
  StyledResultTitle,
  StyledSearchResultContainer,
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
      <StyledSearchResultContainer key={id}>
        <StyledResultLink>{url}</StyledResultLink>
        {/* <StyledResultTitle onClick={handleCardInfo}>{name}</StyledResultTitle> */}
        <StyledResultTitle onClick={() => onSelect(props)}>
          {name}
        </StyledResultTitle>
        <StyledResultDescription>{description}</StyledResultDescription>
      </StyledSearchResultContainer>
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
