import { CgMenuGridO } from "react-icons/cg";
import { styled } from "styled-components";

export const SearchResultContainer = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid #e0e0e0;
`;

export const Card = styled.div`
  display: flex;
  flex: 4;
  justify-content: flex-end;
`;

export const StyledContainer = styled.div`
  width: 800px;
  margin: 50px auto;
  font-family: Arial, sans-serif;
`;

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  border-bottom: 1px solid #e0e0e0;
  max-height: 40px;
`;

export const StyledSearchInput = styled.input`
  padding: 5px 10px;
  border: 1px solid #dcdcdc;
  border-radius: 20px;
  outline: none;
`;

export const UserAvatar = styled.img`
  margin-left: auto;
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const SearchResult = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid #e0e0e0;
`;

export const ResultTitle = styled.h3`
  margin: 0;
  color: #1a0dab;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const ResultLink = styled.a`
  text-decoration: none;
  color: #006621;
  font-size: 13px;
`;

export const ResultDescription = styled.p`
  color: #4d5156;
  font-size: 14px;
`;

export const StyledCard = styled.div`
  display: flex;
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`;

export const CardImage = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 10px;
`;

export const CardContent = styled.div`
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
