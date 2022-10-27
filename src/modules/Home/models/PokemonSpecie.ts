export interface PokemonSpecie {
  base_happiness: number;
  capture_rate: number;
  color: { name: string };
  flavor_text_entries: FlavorTextEntry[];
};

export interface FlavorTextEntry {
  flavor_text: string;
  language: { name: string };
};