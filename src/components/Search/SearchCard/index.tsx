import { useState } from "react";
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
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const displayText = isExpanded
    ? description
    : `${description.substring(0, 200)}...`;

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <StyledCard key={id}>
      {!hidden && (
        <>
          <CardImage src={image} alt={name} onClick={toggleFullScreen} />
          <ResultLink>{url}</ResultLink>
          <h1>{name}</h1>
          <CardContent onClick={() => setIsExpanded(!isExpanded)}>
            {displayText}
          </CardContent>
          {/* <span onClick={() => setIsExpanded(!isExpanded)}>{displayText}</span> */}
        </>
      )}
    </StyledCard>
  );
}

export default SearchCard;
