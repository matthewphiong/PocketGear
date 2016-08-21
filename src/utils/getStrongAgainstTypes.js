/* @flow */

import store from '../store';
import type {
  Pokemon,
  PokemonType,
} from '../typeDefinitions';

export default function getStrongAgainstTypes(pokemon: Pokemon): Array<PokemonType> {
  const typeChart = store.getTypeChart();
  const types = typeChart
    .filter(({ name }) => pokemon.types.includes(name))
    .reduce((acc, curr) => {
      const merged = [ ...acc ];
      for (const type of curr.super_effective) {
        if (!merged.includes(type)) {
          merged.push(type);
        }
      }
      return merged;
    }, []);
  return types;
}