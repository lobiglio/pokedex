import { CreatePokemonPageComponent } from "./pages/create-pokemon-page/create-pokemon-page.component";
import { PokedexPageComponent } from "./pages/pokedex-page/pokedex-page.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", component: PokedexPageComponent },
  { path: "create", component: CreatePokemonPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
