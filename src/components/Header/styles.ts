import { CgMenuGridO } from "react-icons/cg";
import styled from "styled-components";

export const StyledDropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  min-width: 200px;
  overflow: hidden;
  z-index: 1000;
`;

export const StyledDropdownItem = styled.a`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  color: rgba(0, 0, 0, 0.8);
  text-decoration: none;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
    color: rgba(0, 0, 0, 0.9);
  }

  svg {
    margin-right: 10px;
  }
`;

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 24px;
  border-bottom: 1px solid #e0e0e0;
  max-height: 56px;
  /* width: 100%; */
`;

export const StyledLeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const StyledRightGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-left: auto;
`;

export const StyledAppsIcon = styled(CgMenuGridO)`
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
