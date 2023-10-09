// import { faker } from "@faker-js/faker";
import { Link } from "react-router-dom";
import StyledLogo from "./styles";
// import useSearch from "../../hooks/useSearch";
// import { ReactComponent as LogoComponent } from "../../assets/images/svg/logo.svg";

function Logo() {
  //   const { filterAnimals, generateAnimalTypeList } = useSearch();
  //   const animals = generateAnimalTypeList();

  return (
    <Link to="/">
      <StyledLogo />
    </Link>
  );
}
export default Logo;
