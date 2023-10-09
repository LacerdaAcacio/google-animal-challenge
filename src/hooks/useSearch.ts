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

  // const generateAnimalInfoList = (filteredAnimals: AnimalList) => {
  //   const animalInfoList: AnimalsInfoData[] = [];
  //   filteredAnimals.forEach((filteredAnimal: string) => {
  //     animalInfoList.push({
  //       id: uuidv4(),
  //       name: filteredAnimal,
  //       image: faker.image.urlLoremFlickr({ category: "animals" }),
  //       description: faker.lorem.paragraphs(5),
  //     });
  //   });
  //   return animalInfoList;
  // };

  const generateAnimalInfoList = (filteredAnimals: AnimalList) => {
    return filteredAnimals.flatMap((filteredAnimal: string) => {
      // const filteredAnimalName =
      //   faker.animal[filteredAnimal.toLowerCase() as keyof typeof faker.animal];

      // const filteredAnimalName = faker.animal.hasOwnProperty(animalType)
      // ? faker.animal[animalType]
      // : filteredAnimal;
      //     const filteredAnimalName = faker.animal[animalType] || filteredAnimal;
      //     return Array(3)
      //       .fill(null)
      //       .map(() => ({
      //         id: uuidv4(),
      //         // name: filteredAnimal,
      //         name: filteredAnimalName.name,
      //         image: faker.image.urlLoremFlickr({ category: "animals" }),
      //         description: faker.lorem.paragraphs(5),
      //         url: faker.internet.url(),
      //       }));
      //   });
      // };
      return Array(3)
        .fill(null)
        .map(() => {
          const animalType =
            filteredAnimal.toLowerCase() as keyof typeof faker.animal;
          // const filteredAnimalName = faker.animal[animalType] || filteredAnimal;
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
    // const searchValue = getValues("search");
    const filteredAnimals = filterAnimals(searchValue, animals);
    // setAnimalInfoList(generateAnimalInfoList(filteredAnimals));
    // console.log(generateAnimalInfoList(filteredAnimals));

    // navigate.push({
    //   pathname: "/search",
    //   state: { animalData: generateAnimalInfoList(filteredAnimals) },
    // });~
    navigate("/search", {
      state: { animalData: generateAnimalInfoList(filteredAnimals) },
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
