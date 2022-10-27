import api from "@source/services/api";
import axios from "axios";
import { Pokemon } from "../models/Pokemon";
import { PokemonSpecie } from "../models/PokemonSpecie";

class PokemonService {
  private defaultListOfPokemons = ["bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard"];
  constructor() {

  };

  public async getListOfPokemons(list = this.defaultListOfPokemons) {
    const pokemons = new Array<Pokemon>();
    for(let name of list) {
      try {
        const pokemonRequest = api.get("/pokemon/" + name);
        const speciesRequest = api.get("/pokemon-species/" + name);
        await axios.all([pokemonRequest, speciesRequest]).then(axios.spread((...responses) => {
          const [{ data: pokemon }, { data: species }] = responses;
          pokemons.push({ ...pokemon, species });
        })).catch((error) => {
          throw new Error(error);
        });
      } catch(error) {
        continue;
      }
    };

    return Promise.resolve(pokemons);
  };

  public getPokemonSpecies(nameOfPokemon: string): Promise<PokemonSpecie> {
    return new Promise((resolve, reject) => {
      api.get("/pokemon-species/" + nameOfPokemon).then((response) => {
        resolve(response.data);
      }).catch((error) => {
        reject(error);
      });
    });
  };

  public searchForPokemon(nameOfPokemon: string): Promise<Pokemon[]> {
    return new Promise((resolve) => {
      this.getListOfPokemons([nameOfPokemon]).then(response => {
        resolve(response);
      });
    });
  };
};

export default new PokemonService();