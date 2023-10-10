import styled from "styled-components";
import { flexCenter } from "./Shared";

export const StyledHomeContainer = styled.div`
  min-height: 100vh;
  ${flexCenter}
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

export const StyledSearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  padding: 20px;
`;

export const StyledLeftSection = styled.div`
  width: 67%;
`;

export const StyledRightSection = styled.div`
  width: 30%;
`;

export const StyledUserAvatar = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`;

export const StyledAppContainer = styled.div`
  ${flexCenter}
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
`;

export const StyledResultLink = styled.a`
  text-decoration: none;
  color: black;
  font-size: 13px;
`;
