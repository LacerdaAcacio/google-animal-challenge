import { useState } from "react";
import { SearchCardProps } from "../../../types/PropsData";
import {
  StyledCardContent,
  StyledCardImage,
  StyledCard,
  StyledOverlay,
  StyledCloseButton,
} from "../styles";
import { StyledResultLink } from "../../../styles/styles";

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

  const displayModal = isModalOpen ? "modal" : "";

  const toggleExpand = () => setIsExpanded((prev) => !prev);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {isModalOpen && (
        <>
          <StyledCloseButton onClick={closeModal}>×</StyledCloseButton>
          <StyledOverlay onClick={closeModal} />
        </>
      )}
      <StyledCard key={id} className={displayModal}>
        {!hidden && (
          <>
            <StyledCardImage src={image} alt={name} onClick={openModal} />
            <StyledResultLink>{url}</StyledResultLink>
            <h1>{name}</h1>
            <StyledCardContent onClick={toggleExpand}>
              {displayText}
            </StyledCardContent>
          </>
        )}
      </StyledCard>
    </>
  );
}

export default SearchCard;
