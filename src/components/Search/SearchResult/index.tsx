import { AnimalsInfoData } from "../../../types/AnimalsInfoData";
import {
  StyledResultDescription,
  StyledResultTitle,
  StyledSearchResultContainer,
} from "../styles";
import { SearchResultProps } from "../../../types/PropsData";
import { StyledResultLink } from "../../../styles/styles";

function SearchResult({
  description,
  name,
  url,
  id,
  image,
  onSelect,
}: SearchResultProps) {
  const props: AnimalsInfoData = { description, name, url, id, image };

  return (
    <StyledSearchResultContainer key={id}>
      <StyledResultLink>{url}</StyledResultLink>
      <StyledResultTitle onClick={() => onSelect(props)}>
        {name}
      </StyledResultTitle>
      <StyledResultDescription>{description}</StyledResultDescription>
    </StyledSearchResultContainer>
  );
}

export default SearchResult;
