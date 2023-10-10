import styled from "styled-components";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { flexCenter, hoverUnderline, iconStyles } from "../../styles/Shared";

interface StyledSearchInputProps {
  isHeader?: boolean;
}

export const StyledSearchFieldContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const StyledSearchIcon = styled(AiOutlineSearch)`
  ${iconStyles};
  left: 10px;
`;

export const StyledCloseIcon = styled(AiOutlineClose)`
  ${iconStyles};
  right: 10px;
  cursor: pointer;
`;

export const StyledSearchResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 1.875rem 0;
  gap: 0.625rem;
`;

export const StyledSearchInput = styled.input<StyledSearchInputProps>`
  padding: ${(props) =>
    props.isHeader ? "0.3125rem 0.625rem" : "0.9375rem 1.25rem"};
  font-size: ${(props) => (props.isHeader ? "1rem" : "1.25rem")};
  border: 0.0625rem solid #dcdcdc;
  border-radius: ${(props) => (props.isHeader ? "1.25rem" : "1.875rem")};
  outline: none;
  padding-left: 30px;
  padding-right: 30px;
`;

export const StyledResultTitle = styled.h3`
  margin: 0;
  color: #1a0dab;
  ${hoverUnderline}
`;

export const StyledResultDescription = styled.p`
  color: #4d5156;
  font-size: 0.875rem;
`;

export const StyledCard = styled.div`
  ${flexCenter}
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 0.5rem;
  width: 100%;
  padding: 1.25rem;
  background-color: #fff;
  border: 0.0625rem solid #e0e0e0;
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.1);

  &.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    background-color: white;
    max-width: 35%;
    overflow: auto;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
  }
`;

export const StyledCloseButton = styled.span`
  color: #e0e0e0;
  position: absolute;
  top: 0.625rem;
  right: 0.625rem;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  z-index: 1001;
`;

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const StyledCardImage = styled.img`
  width: 100%;
  margin-right: 0.625rem;
`;

export const StyledCardContent = styled.div`
  flex: 1;
`;

export const StyledNotFoundContainer = styled.div`
  display: block;
  font-family: Arial, sans-serif;
  font-size: 1rem;
  color: #5f6368;
  margin-top: 1.25rem;
  padding-left: 1.25rem;

  b {
    font-weight: bold;
    color: #202124;
  }
`;
