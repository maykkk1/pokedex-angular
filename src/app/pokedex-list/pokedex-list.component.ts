import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, retry, Subscription } from 'rxjs';
import { PokedexService } from '../pokedex.service';
import { Pokemon } from '../shared/pokemon.model';


@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: ['./pokedex-list.component.css']
})
export class PokedexListComponent implements OnInit, OnDestroy {
  subs: Subscription;

  pokemons: Pokemon[];

  constructor(private pokedexService: PokedexService) { 
    this.pokemons = pokedexService.getPokemons();
    }
  ngOnInit(): void {
    this.subs = this.pokedexService.pokemonsListChanged.subscribe(change => {
      this.pokemons = this.pokedexService.getPokemons();
    })
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
