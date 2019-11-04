import { PokedexService } from "./../../shared/pokedex.service";
import { Pokemon } from "./../../shared/pokemon";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pokedex-page",
  templateUrl: "./pokedex-page.component.html",
  styleUrls: ["./pokedex-page.component.scss"]
})
export class PokedexPageComponent implements OnInit {
  pokemons: Pokemon[];
  pokemon: Pokemon;

  constructor(private pokedexService: PokedexService) {}

  ngOnInit(): void {
    this.pokemons = this.pokedexService.getPokemons();
  }
}
