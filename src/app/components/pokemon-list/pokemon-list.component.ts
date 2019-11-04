import { Pokemon } from "./../../shared/pokemon";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-pokemon-list",
  templateUrl: "./pokemon-list.component.html",
  styleUrls: ["./pokemon-list.component.scss"]
})
export class PokemonListComponent implements OnInit {
  @Input() pokemons: Pokemon[];
  @Output() getPokemon: EventEmitter<any> = new EventEmitter();
  pokemon: Pokemon;

  constructor() {}

  ngOnInit() {}

  sendPokemon(pokemon) {
    this.getPokemon.emit(pokemon);
  }
}
