import { PokemonsMock } from "./pokemons-mock";
import { Injectable } from "@angular/core";
import { Pokemon } from "./pokemon";

@Injectable({
  providedIn: "root"
})
export class PokedexService {
  constructor() {}

  public getPokemons(): Pokemon[] {
    return PokemonsMock;
  }

  public addPokemon(pokemon: Pokemon) {
    PokemonsMock.push(pokemon);
  }
}
