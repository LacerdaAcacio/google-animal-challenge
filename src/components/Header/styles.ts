import { CgMenuGridO } from "react-icons/cg";
import styled from "styled-components";
import { flexCenter } from "../../styles/Shared";

export const StyledDropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  border: 0.0625rem solid rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  background-color: white;
  box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.1);
  min-width: 12.5rem;
  overflow: hidden;
  z-index: 1000;
`;

export const StyledDropdownItem = styled.a`
  ${flexCenter}
  padding: 0.625rem 0.9375rem;
  color: rgba(0, 0, 0, 0.8);
  text-decoration: none;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
    color: rgba(0, 0, 0, 0.9);
  }

  svg {
    margin-right: 0.625rem;
  }
`;

export const StyledDropdownContainer = styled.div`
  position: relative;
`;

export const StyledHeader = styled.div`
  ${flexCenter}
  justify-content: space-between;
  padding: 0.625rem 1.5rem;
  border-bottom: 0.0625rem solid #e0e0e0;
  max-height: 3.5rem;
  width: 100%;
  box-sizing: border-box;
`;

export const StyledLeftGroup = styled.div`
  ${flexCenter}
  gap: 1rem;
`;

export const StyledRightGroup = styled.div`
  ${flexCenter}
  gap: 1rem;
  margin-left: auto;
`;

export const StyledAppsIcon = styled(CgMenuGridO)`
  margin-left: auto;
  width: 1.5rem;
  height: 1.5rem;
  color: #5f6368;
  border-radius: 50%;
  transition:
    background-color 0.2s,
    box-shadow 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
    box-shadow: 0 0.0625rem 0.0625rem rgba(0, 0, 0, 0.1);
  }

  &:active {
    background-color: #e5e5e5;
  }
`;
