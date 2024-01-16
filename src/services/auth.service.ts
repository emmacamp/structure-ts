const baseUrl: string = "https://rickandmortyapi.com/api/";
const characterUrl: string = baseUrl + "character/";

export const getMorty = async () => {
  const response = await fetch(characterUrl + "2");
  const data = await response.json();
  return data;
};
