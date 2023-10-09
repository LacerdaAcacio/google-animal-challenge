import styled from "styled-components";

export const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const SearchPageContainer = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%; */
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const UserAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const StyledAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
`;
