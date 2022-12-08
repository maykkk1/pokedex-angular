import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, filter, map, Observable, Subscription } from 'rxjs';
import { PokedexService } from '../pokedex.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  search = new FormControl()
  results: Subscription;

  constructor(private pokedexService: PokedexService) { }

  ngOnInit(): void {
    this.results = this.search.valueChanges.pipe(
      map(data => data.trim()),
      debounceTime(200)
    ).subscribe(data => {
      this.pokedexService.filterPokemons(data)
      console.log(this.pokedexService.pokemons)
    })
  }

  ngOnDestroy(): void {
    this.results.unsubscribe()
  }

}
