// import { faker } from "@faker-js/faker";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import SearchForm from "../../components/Form/SearchForm";
import { HomeContainer } from "../../styles/styles";
import Logo from "../../components/Logo";
import useHiddenSearch from "../../hooks/contexts/useHiddenSearch";
// import useSearch from "../../hooks/useSearch";
// import { ReactComponent as Logo } from "../../assets/images/svg/logo.svg";

function HomePage() {
  //   const { filterAnimals, generateAnimalTypeList } = useSearch();
  //   const animals = generateAnimalTypeList();
  // const location = useLocation();
  const { setHiddenSearch } = useHiddenSearch();

  useEffect(() => {
    setHiddenSearch(true);
  }, [setHiddenSearch]);

  return (
    <HomeContainer>
      <Link to="/">
        <Logo />
      </Link>
      <SearchForm />
      {/* <input
        type="text"
        placeholder="Pesquise sobre animais"
        onChange={(e) => {
          //   const animalInfo = faker.animal.type();
          const filteredAnimals = filterAnimals(e.target.value, animals);
          console.log(filteredAnimals);
        }}
      /> */}
    </HomeContainer>
  );
}
export default HomePage;
