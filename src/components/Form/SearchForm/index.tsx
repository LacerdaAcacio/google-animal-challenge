// import { faker } from "@faker-js/faker";
import { useForm } from "react-hook-form";
// import { HomeContainer } from "../../styles/styles";
import useSearch from "../../../hooks/useSearch";
import SearchField from "../../Search/SearchField";
import { SearchFormDataProps } from "../../../types/PropsData";
// import { ReactComponent as Logo } from "../../assets/images/svg/logo.svg";

function SearchForm({ hideButton }: SearchFormDataProps) {
  // const [animalInfoList, setAnimalInfoList] = useState<AnimalsInfoData[]>([]);
  const {
    // filterAnimals,
    generateAnimalTypeList,
    // generateAnimalInfoList,
    handleSearch,
  } = useSearch();
  const animals = generateAnimalTypeList();

  const form = useForm();
  // const searchRef = useRef(null);
  // const watchedSearchValue = form.watch("search");
  // const navigate = useNavigate();
  // const hasSearchValue = Boolean(watchedSearchValue);
  // useEffect(() => {
  //   console.log(hasSearchValue);
  // }, [watchedSearchValue]);

  // const handleExchangeButton = () => {
  //   // handleSubmit((formData: any) => onSubmit(formData));
  //   const searchValue = getValues("search");
  //   // return console.log(filterAnimals(searchValue, animals));
  //   const filteredAnimals = filterAnimals(searchValue, animals);
  //   return setAnimalInfoList(generateAnimalInfoList(filteredAnimals));
  // };

  // const handleExchangeButton = () => {
  //   const searchValue = getValues("search");
  //   const filteredAnimals = filterAnimals(searchValue, animals);
  //   // setAnimalInfoList(generateAnimalInfoList(filteredAnimals));
  //   console.log(generateAnimalInfoList(filteredAnimals));

  //   // navigate.push({
  //   //   pathname: "/search",
  //   //   state: { animalData: generateAnimalInfoList(filteredAnimals) },
  //   // });~
  //   navigate("/search", {
  //     state: { animalData: generateAnimalInfoList(filteredAnimals) },
  //   });
  // };

  const handleSearchSubmit = () => {
    handleSearch(form.getValues("search"), animals);
  };

  return (
    // <input
    //   type="text"
    //   placeholder="Pesquise sobre animais"
    //   onChange={(e) => {
    //     //   const animalInfo = faker.animal.type();
    //     const filteredAnimals = filterAnimals(e.target.value, animals);
    //     console.log(filteredAnimals);
    //   }}
    // >
    //   <AiOutlineSearch />
    // </input>
    <>
      <SearchField form={form} handleSearchSubmit={handleSearchSubmit} />
      {/* <div
        style={{
          position: "relative",
          display: "inline-block",
          margin: "25px",
        }}
      >
        <AiOutlineSearch
          style={{
            position: "absolute",
            left: "10px",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        />
        {hasSearchValue && (
          <AiOutlineClose
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
            }}
            // onClick={() => setInputValue("")}
            onClick={() => setValue("search", "")}
          />
        )}
        <StyledSearchInput
          // ref={searchRef}
          type="text"
          placeholder="Pesquise sobre animais"
          {...register("search")}
          // value={inputValue}
          // onChange={(e) => {
          //   setInputValue(e.target.value);
          // }}
          style={{
            paddingLeft: "30px",
            paddingRight: "30px",
            // paddingRight: hasSearchValue ? "30px" : "10px",
          }} // Espaço para os ícones
          // quando clicar enter rodar handleExchangeButton
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleExchangeButton();
            }
          }}
        />
      </div> */}
      {!hideButton && (
        <button
          type="submit"
          onClick={handleSearchSubmit}
          // onSubmit={handleExchangeButton}
        >
          Buscar
        </button>
      )}
    </>
  );
}
export default SearchForm;
