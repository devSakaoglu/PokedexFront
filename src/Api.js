import axios from "axios";
// const BaseUrl = "http://localhost:8000/api";
const BaseUrl = "https://pokedex.devsakaoglu.repl.co/api";

export const getAllPokemons = async () => {
  const res = await axios.get(`${BaseUrl}/pokemons`);
  return res;
};

export const getPokemon = async (id) => {
  const res = await axios.get(`${BaseUrl}/pokemons/${id}`);
  return res;
};
export const getItems = async (ItemType) => {
  const res = await axios.get(`${BaseUrl}/${ItemType}`);
  return res.data.map((item) => {
    if (ItemType == "berries") {
      return {
        itemId: item.Berry_Id,
        itemName: item.Berry_name,
        itemEffect: item.Berry_Effect,
      };
    } else if (ItemType == "pokeballs") {
      return {
        itemId: item.Pokeball_Id,
        itemName: item.Pokeball_name,
        itemEffect: item.Pokeball_Effect,
      };
    } else if (ItemType == "medicines") {
      return {
        itemId: item.Medicine_Id,
        itemName: item.Medicine_Name,
        itemEffect: item.Medicine_Effect,
      };
    } else if (ItemType == "generalItems") {
      return {
        itemId: item.General_item_Id,
        itemName: item.General_item_name,
        itemEffect: item.General_item_effect,
      };
    }
  });
};
export const getPokemonsType = async (id) => {
    const res = await axios.get(`${BaseUrl}/types/${id}`);
    return res;
  };
  export const getTypes = async () => {
    const res = await axios.get(`${BaseUrl}/types`);
    return res;
  };


  export const getEliteFours = async () => {
    const res = await axios.get(`${BaseUrl}/elitefour`);
    return res;
  };

  export const getGymLeaders = async () => {
    const res = await axios.get(`${BaseUrl}/gymleaders`);
    return res;
  };



