import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PockedexPageComponent } from './pages/pockedex-page/pockedex-page.component';
import { PockemonListComponent } from './components/pockemon-list/pockemon-list.component';
import { PockemonDetailComponent } from './pages/pockemon-detail/pockemon-detail.component';
import { CreatePokemonPageComponent } from './components/create-pokemon-page/create-pokemon-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PockedexPageComponent,
    PockemonListComponent,
    PockemonDetailComponent,
    CreatePokemonPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
