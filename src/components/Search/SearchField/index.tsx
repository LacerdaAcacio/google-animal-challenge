// import { faker } from "@faker-js/faker";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
// import { HomeContainer } from "../../styles/styles";
import { StyledSearchInput } from "../styles";
import { SearchFieldProps } from "../../../types/PropsData";
// import { ReactComponent as Logo } from "../../assets/images/svg/logo.svg";

function SearchField({ form, handleSearchSubmit }: SearchFieldProps) {
  // const [animalInfoList, setAnimalInfoList] = useState<AnimalsInfoData[]>([]);
  //   const { filterAnimals, generateAnimalTypeList, generateAnimalInfoList } =
  //     useSearch();
  //   const animals = generateAnimalTypeList();

  //   const { register, getValues, setValue, watch } = useForm();
  // const searchRef = useRef(null);
  const watchedSearchValue = form.watch("search");
  //   const navigate = useNavigate();
  const hasSearchValue = Boolean(watchedSearchValue);
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
  //   const handleExchangeButton = () => {
  //     const searchValue = getValues("search");
  //     const filteredAnimals = filterAnimals(searchValue, animals);
  //     // setAnimalInfoList(generateAnimalInfoList(filteredAnimals));
  //     console.log(generateAnimalInfoList(filteredAnimals));

  //     // navigate.push({
  //     //   pathname: "/search",
  //     //   state: { animalData: generateAnimalInfoList(filteredAnimals) },
  //     // });~
  //     navigate("/search", {
  //       state: { animalData: generateAnimalInfoList(filteredAnimals) },
  //     });
  //   };

  return (
    <div
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
          onClick={() => form.setValue("search", "")}
        />
      )}
      <StyledSearchInput
        // ref={searchRef}
        type="text"
        placeholder="Pesquise sobre animais"
        {...form.register("search")}
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
            handleSearchSubmit();
          }
        }}
      />
    </div>
  );
}
export default SearchField;
