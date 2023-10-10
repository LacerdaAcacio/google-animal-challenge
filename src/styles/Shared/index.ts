import { css } from "styled-components";

export const flexCenter = css`
  display: flex;
  align-items: center;
`;

export const hoverUnderline = css`
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const iconStyles = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;
