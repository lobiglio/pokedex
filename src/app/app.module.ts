import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PokedexPageComponent } from "./pages/pokedex-page/pokedex-page.component";
import { PokemonListComponent } from "./components/pokemon-list/pokemon-list.component";
import { PokemonDetailComponent } from "./components/pokemon-detail/pokemon-detail.component";
import { CreatePokemonPageComponent } from "./pages/create-pokemon-page/create-pokemon-page.component";

@NgModule({
  declarations: [
    AppComponent,
    PokedexPageComponent,
    PokemonListComponent,
    PokemonDetailComponent,
    CreatePokemonPageComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
