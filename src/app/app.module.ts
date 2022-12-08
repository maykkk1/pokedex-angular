import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokedexListComponent } from './pokedex-list/pokedex-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PokedexItemComponent } from './pokedex-item/pokedex-item.component';
import { PokedexService } from './pokedex.service';

@NgModule({
  declarations: [
    AppComponent,
    PokedexListComponent,
    PokedexItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
