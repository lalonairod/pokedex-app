import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './pages/add/add.component';
import { FindComponent } from './pages/find/find.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { PokedexComponent } from './pages/pokedex/pokedex.component';
import { ListComponent } from './pages/list/list.component';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './pages/edit/edit.component';
import { PokemonResolver } from '../../../services/resolvers/pokemon.resolver';

const routes: Routes = [
  {
    path: '',
    //component : PokedexComponent,
    children : [
      {
        path : 'add',
        component : AddComponent
      },
      {
        path : 'edit/:id',
        component : PokemonComponent
      },
      {
        path : 'find',
        component : FindComponent
      },
      {
        path : 'list',
        component : ListComponent
      },
      {
        path : '',
        component : PokedexComponent,
        pathMatch : 'full'
      },
      {
        path : 'pokemon/:id',
        component : PokemonComponent,
        resolve : {
          pokemon : PokemonResolver
        }
      },
      {
        path : '**',
        redirectTo : 'list'
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports :
  [RouterModule]
})
export class PokedexRoutingModule { }
