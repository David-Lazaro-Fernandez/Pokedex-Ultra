import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {PokeCardComponent} from './poke-card/poke-card.component';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {CategoriesComponent} from './categories/categories.component';
import {PokeNewsComponent} from './poke-news/poke-news.component';
import {GenerationsComponent} from './pokedex/generations/generations.component';
import {PokedexComponent} from './pokedex/pokedex.component';

const rutas: Routes = [
  {
    path:'',
    pathMatch: 'full', 
    redirectTo: 'main-menu'
  },
  {
    path: 'main-menu',
    component: AppComponent
  },
  {
    path:'generations',
    loadChildren: () => import('./pokedex/generations/generations.module').then(m => m.GenerationsPageModule)
  },
  {
    path:'pokeList',
    component: GenerationsComponent
  }
]

@NgModule({
  declarations: [AppComponent, PokeCardComponent, SearchBarComponent, CategoriesComponent, PokeNewsComponent, PokedexComponent, GenerationsComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
