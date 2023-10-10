import { CgMenuGridO } from "react-icons/cg";
import { styled } from "styled-components";

interface StyledSearchInputProps {
  isHeader?: boolean;
}

export const StyledSearchResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 30px 0;
  gap: 10px;
`;

export const StyledSearchInput = styled.input<StyledSearchInputProps>`
  padding: ${(props) => (props.isHeader ? "5px 10px" : "15px 20px")};
  font-size: ${(props) => (props.isHeader ? "16px" : "20px")};
  border: 1px solid #dcdcdc;
  border-radius: ${(props) => (props.isHeader ? "20px" : "30px")};
  outline: none;
`;

export const StyledResultTitle = styled.h3`
  margin: 0;
  color: #1a0dab;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const StyledResultLink = styled.a`
  text-decoration: none;
  color: black;
  font-size: 13px;
`;

export const StyledResultDescription = styled.p`
  color: #4d5156;
  font-size: 14px;
`;

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  &.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    background-color: white;
    max-width: 35%;
    max-height: 80%;
    overflow: auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const StyledCloseButton = styled.span`
  color: #e0e0e0;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
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
  margin-right: 10px;
`;

export const StyledCardContent = styled.div`
  flex: 1;
`;

export const StyledAppsIcon = styled(CgMenuGridO)`
  margin-left: auto;
  width: 24px;
  height: 24px;
  color: #5f6368;
  border-radius: 50%;
  transition:
    background-color 0.2s,
    box-shadow 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  }

  &:active {
    background-color: #e5e5e5;
  }
`;

export const StyledNotFoundContainer = styled.div`
  display: block;
  font-family: Arial, sans-serif;
  font-size: 16px;
  color: #5f6368;
  margin-top: 20px;
  padding-left: 20px;

  b {
    font-weight: bold;
    color: #202124;
  }
`;
