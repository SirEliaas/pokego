import React, { PropsWithChildren } from "react";
import { Pokemon } from "@source/modules/Home/models/Pokemon";
import PokemonService from "../services/PokemonService";

const INITIAL_VALUES = {
  pokemons: new Array<Pokemon>(),
  getListOfPokemons: () => null,
  searchPokemon: (name: string): Promise<any> => null,
};

export const PokemonContext = React.createContext(INITIAL_VALUES);
export const PokemonProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [pokemons, setPokemons] = React.useState([]);

  const getListOfPokemons = React.useCallback(() => {
    PokemonService.getListOfPokemons().then((response) => {
      setPokemons(response);
    });
  }, [pokemons]);

  const searchPokemon = React.useCallback(async (nameOfPokemon: string) => {
    const response = await PokemonService.searchForPokemon(nameOfPokemon);
    setPokemons(response);
  }, [pokemons]);

  React.useEffect(() => {
    getListOfPokemons();
  }, []);

  const value = { pokemons, getListOfPokemons, searchPokemon };
  return (
    <PokemonContext.Provider value={value}>
      {children}
    </PokemonContext.Provider>
  );
};