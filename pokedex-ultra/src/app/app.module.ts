import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {PokeCardComponent} from './poke-card/poke-card.component';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {CategoriesComponent} from './categories/categories.component';
import {PokeNewsComponent} from './poke-news/poke-news.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';

const rutas: Routes = [
  {
    path: 'main-menu',
    component: AppComponent
  }
]

@NgModule({
  declarations: [AppComponent, PokeCardComponent, SearchBarComponent, CategoriesComponent, PokeNewsComponent],
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
