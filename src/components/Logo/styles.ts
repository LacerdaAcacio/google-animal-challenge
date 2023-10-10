import styled from "styled-components";
import { ReactComponent as LogoComponent } from "../../assets/images/svg/logo.svg";

const StyledLogo = styled(LogoComponent)`
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
  display: flex;

  @media (max-width: 768px) {
    max-width: 120px;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

export default StyledLogo;
