import { CgMenuGridO } from "react-icons/cg";
import { styled } from "styled-components";

interface StyledSearchInputProps {
  isHeader?: boolean;
}

export const StyledSearchResultContainer = styled.div`
  /* width: 60%;
  padding: 10px 0;
  border-bottom: 1px solid #e0e0e0; */
  /* display: flex; */
  /* flex: 6; */
  /* flex: 6;
  padding: 10px 0;
  border-bottom: 1px solid #e0e0e0;
  overflow-y: auto; */
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 30px 0;
  gap: 10px;
  /* margin: 20px; */
`;

// export const StyledHeader = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: flex-start;
//   padding: 10px;
//   border-bottom: 1px solid #e0e0e0;
//   max-height: 40px;
// `;

export const StyledSearchInput = styled.input<StyledSearchInputProps>`
  /* padding: 5px 10px; */
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

// export const StyledCard = styled.div`
//   /* display: flex;
//   margin-top: 20px;
//   padding: 10px;
//   border: 1px solid #e0e0e0;
//   border-radius: 8px; */
//   flex: 4;
//   position: relative;

//   &::before {
//     content: "";
//     display: ${(props) => (props.hidden ? "none" : "block")};
//     position: fixed;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     left: 0;
//     background-color: rgba(0, 0, 0, 0.5);
//     z-index: 9999;
//   }
// `;

// export const Overlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background-color: rgba(0, 0, 0, 0.6); // Este é o fundo cinza opaco
//   display: flex;
//   justify-content: center;
//   align-items: center; // Estas propriedades centralizarão o card dentro do Overlay
//   z-index: 1000; // Garante que o Overlay esteja acima de outros elementos
// `;

// export const StyledCard = styled.div`
//   /* As estilizações originais do card. Por exemplo: */
//   width: 60%; /* ou qualquer largura específica que você queira */
//   padding: 20px;
//   background-color: white;
//   border-radius: 8px;
//   box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1); /* Sombra suave para dar uma elevação */

//   /* Opcional: Você pode adicionar uma animação para que o card apareça suavemente */
//   animation: fadeIn 0.5s;

//   @keyframes fadeIn {
//     from {
//       opacity: 0;
//       transform: translateY(-50px);
//     }
//     to {
//       opacity: 1;
//       transform: translateY(0);
//     }
//   }
// `;

// export const StyledCard = styled.div<StyledCardProps>`
//   flex: 4;
//   position: relative;

//   ${(props) =>
//     props.isFullScreen &&
//     `
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100vw;
//     height: 100vh;
//     z-index: 10000;
//     background-color: white;
//   `}

//   &::before {
//     content: "";
//     display: ${(props) => (props.isHidden ? "none" : "block")};
//     position: fixed;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     left: 0;
//     background-color: rgba(0, 0, 0, 0.5);
//     z-index: 9999;
//   }
// `;

// export const StyledCard = styled.div`
//   /* flex: 4;
//   position: relative; */
//   width: 100%;
//   height: 100%;

//   /* &::before {
//     content: "";
//     display: ${(props) => (props.hidden ? "none" : "block")};
//     position: fixed;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     left: 0;
//     background-color: rgba(0, 0, 0, 0.5);
//     z-index: 9999;
//   } */
// `;

// export const StyledCard = styled.div<StyledCardProps>`
export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
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
  /* height: 160px; */
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
  /* height: 100%; */
  padding-left: 20px;

  b {
    font-weight: bold;
    color: #202124;
  }
`;
