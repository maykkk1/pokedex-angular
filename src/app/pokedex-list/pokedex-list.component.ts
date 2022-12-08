import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, retry } from 'rxjs';
import { PokedexService } from '../pokedex.service';
import { Pokemon } from '../shared/pokemon.model';


@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: ['./pokedex-list.component.css']
})
export class PokedexListComponent implements OnInit {

  pokemons: Pokemon[];

  constructor(private pokedexService: PokedexService) { 
    this.pokemons = pokedexService.getPokemons();
   }

  ngOnInit(): void {}

}
