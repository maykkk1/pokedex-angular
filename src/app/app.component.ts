import { Component, OnInit } from '@angular/core';
import { PokedexService } from './pokedex.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'pokedex';
  isPokemonsLoad: boolean = false;

  constructor(private pokedexService: PokedexService) {}

  ngOnInit(): void {
    this.pokedexService.fetchPokemons()
    if(this.pokedexService.getPokemons().length == 150) {
      this.isPokemonsLoad = true;
    }
  }
}
