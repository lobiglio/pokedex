import { Pokemon } from "./../../shared/pokemon";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-pokemon-detail",
  templateUrl: "./pokemon-detail.component.html",
  styleUrls: ["./pokemon-detail.component.scss"]
})
export class PokemonDetailComponent implements OnInit {
  @Input() pokemon: Pokemon;
  constructor() {}

  ngOnInit() {}
}
