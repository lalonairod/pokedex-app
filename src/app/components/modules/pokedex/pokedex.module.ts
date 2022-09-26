import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PokedexRoutingModule } from "./pokedex-routing.module";
import { AddComponent } from './pages/add/add.component';
import { EditComponent } from './pages/edit/edit.component';
import { FindComponent } from './pages/find/find.component';
import { ListComponent } from './pages/list/list.component';
import { PokedexComponent } from './pages/pokedex/pokedex.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';

@NgModule({
    declarations: [
      AddComponent,
      EditComponent,
      FindComponent,
      ListComponent,
      PokedexComponent,
      PokemonComponent
    ],
    imports: [
      CommonModule,
      PokedexRoutingModule
    ]
  })
    export class PokedexModule { }