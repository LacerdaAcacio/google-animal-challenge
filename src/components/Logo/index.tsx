import { Link } from "react-router-dom";
import StyledLogo from "./styles";

function Logo() {
  return (
    <Link to="/">
      <StyledLogo />
    </Link>
  );
}
export default Logo;
