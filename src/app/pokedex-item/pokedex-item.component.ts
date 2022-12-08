import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../shared/pokemon.model';

@Component({
  selector: 'app-pokedex-item',
  templateUrl: './pokedex-item.component.html',
  styleUrls: ['./pokedex-item.component.css']
})
export class PokedexItemComponent implements OnInit {
  @Input() pokemon: Pokemon;
  boxShadow: string;


  constructor() { }

  ngOnInit(): void {
    this.boxShadow = `linear-gradient(to bottom left, ${this.pokemon.types[0].color}, rgba(0, 0, 0, 0))`
    console.log(this.boxShadow)
  }

}
