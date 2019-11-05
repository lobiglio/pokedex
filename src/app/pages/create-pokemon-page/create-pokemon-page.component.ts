import { PokedexService } from "./../../shared/pokedex.service";
import { Pokemon } from "./../../shared/pokemon";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-create-pokemon-page",
  templateUrl: "./create-pokemon-page.component.html",
  styleUrls: ["./create-pokemon-page.component.scss"]
})
export class CreatePokemonPageComponent implements OnInit {
  pokemon: Pokemon = new Pokemon();

  constructor(private pokedexService: PokedexService, private router: Router) {}

  ngOnInit() {}

  sendPokemon() {
    this.pokedexService.addPokemon(this.pokemon);
    this.router.navigate(["/"]);
  }
}
