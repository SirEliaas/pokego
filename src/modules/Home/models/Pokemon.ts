import { PokemonSpecie } from "./PokemonSpecie";
import { PokemonSprite } from "./PokemonSprite";
import { PokemonStat } from "./PokemonStat";
import { PokemonType } from "./PokemonType";

export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  sprites: PokemonSprite;
  species: PokemonSpecie;
  types: PokemonType[];
  stats: PokemonStat[];
};