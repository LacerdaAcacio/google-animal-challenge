import { useState } from "react";
import { SearchCardProps } from "../../../types/PropsData";
import {
  StyledCardContent,
  StyledCardImage,
  StyledCard,
  StyledResultLink,
  StyledOverlay,
  StyledCloseButton,
} from "../styles";

function SearchCard({
  description,
  name,
  url,
  id,
  hidden,
  image,
}: SearchCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const displayText = isExpanded
    ? description
    : `${description.substring(0, 200)}...`;

  return (
    <>
      {isModalOpen && (
        <>
          <StyledCloseButton onClick={() => setIsModalOpen(false)}>
            ×
          </StyledCloseButton>
          <StyledOverlay onClick={() => setIsModalOpen(false)} />
        </>
      )}
      <StyledCard key={id} className={isModalOpen ? "modal" : ""}>
        {!hidden && (
          <>
            <StyledCardImage
              src={image}
              alt={name}
              onClick={() => setIsModalOpen(true)}
            />
            <StyledResultLink>{url}</StyledResultLink>
            <h1>{name}</h1>
            <StyledCardContent onClick={() => setIsExpanded(!isExpanded)}>
              {displayText}
            </StyledCardContent>
          </>
        )}
      </StyledCard>
    </>
  );
}

export default SearchCard;
