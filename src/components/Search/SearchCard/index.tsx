import { SearchCardProps } from "../../../types/PropsData";
import { CardContent, CardImage, StyledCard, ResultLink } from "../styles";

function SearchCard({
  description,
  name,
  url,
  id,
  hidden,
  image,
}: SearchCardProps) {
  return (
    <StyledCard key={id}>
      {!hidden && (
        <>
          <CardImage src={image} alt={name} />
          <ResultLink>{url}</ResultLink>
          <h1>{name}</h1>
          <CardContent>{description}</CardContent>
        </>
      )}
    </StyledCard>
  );
}

export default SearchCard;
