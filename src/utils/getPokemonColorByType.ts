import { PokemonType } from "@source/modules/Home/models/PokemonType";

export default function getPokemonColorByTypes(types: PokemonType[]) {
  let color = "#E9E9E9";
  for(let item of types) {
    switch(item.type.name.toLowerCase()) {
      case "fire": {
        color = "#FB6C6C";
        break;
      };

      case "grass": {
        color = "#48D0B0";
        break;
      };

      case "water": {
        color = "#77BDFE";
        break;
      };

      case "bug": {
        color = "#48D0B0";
        break;
      };

      default: { break };
    };
  };

  return color;
};