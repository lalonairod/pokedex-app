import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnrollComponent } from './components/modules/auth/pages/enroll/enroll.component';
import { LoginComponent } from './components/modules/auth/pages/login/login.component';
import { ListComponent } from './components/modules/pokedex/pages/list/list.component';
import { AddComponent } from './components/modules/pokedex/pages/add/add.component';
import { FindComponent } from './components/modules/pokedex/pages/find/find.component';
import { PokedexComponent } from './components/modules/pokedex/pages/pokedex/pokedex.component';
import { PokemonComponent } from './components/modules/pokedex/pages/pokemon/pokemon.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { AuthModule } from './components/modules/auth/auth.module';
import { AuthRoutingModule } from './components/modules/auth/auth-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './services/interceptors/token.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass : TokenInterceptor, multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
