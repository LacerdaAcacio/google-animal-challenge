import { faker } from "@faker-js/faker";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

type AnimalList = string[];

const useSearch = () => {
  const navigate = useNavigate();
  const generateAnimalTypeList = (count: number = 100): AnimalList => {
    const animalSet = new Set(
      Array.from({ length: count }, () => faker.animal.type()),
    );
    return [...animalSet];
  };

  const filterAnimals = (input: string, animalList: AnimalList): AnimalList =>
    animalList.filter((animal) =>
      animal.toLowerCase().includes(input.toLowerCase()),
    );

  const generateAnimalInfoList = (filteredAnimals: AnimalList) => {
    return filteredAnimals.flatMap((filteredAnimal: string) => {
      return Array(3)
        .fill(null)
        .map(() => {
          const animalType =
            filteredAnimal.toLowerCase() as keyof typeof faker.animal;
          const randomName = faker.animal[animalType]
            ? faker.animal[animalType]()
            : filteredAnimal;

          return {
            id: uuidv4(),
            name: randomName,
            image: faker.image.urlLoremFlickr({ category: "animals" }),
            description: faker.lorem.paragraphs(5),
            url: faker.internet.url(),
          };
        });
    });
  };

  const handleSearch = (searchValue: string, animals: AnimalList) => {
    const filteredAnimals = filterAnimals(searchValue, animals);
    navigate("/search", {
      state: {
        animalData: generateAnimalInfoList(filteredAnimals),
        searchValue,
      },
    });
  };

  return {
    generateAnimalTypeList,
    filterAnimals,
    generateAnimalInfoList,
    handleSearch,
  };
};

export default useSearch;
