import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { retry } from "rxjs";
import { Pokemon } from "./shared/pokemon.model";

interface ResponsePokedex {
    name:string;
    id: number;
    sprites: { front_default: string };
    types: { type: { name: string} }[];
    height: number;
    weight: number;
  }


@Injectable({providedIn: 'root'})
export class PokedexService {
    constructor(private http: HttpClient) {}
    pokemons: Pokemon[] = [];


    getPokemons() {
        return this.pokemons;
    }

    fetchPokemons() {
        for(let i =0;i<150;i++) {
            this.http.get<ResponsePokedex>(`https://pokeapi.co/api/v2/pokemon/${i+1}/`)
                .toPromise()
                .then(data => {
                    if(data != undefined) {
                        const types: { name: string, color: string}[] = [];
                        data?.types.forEach(typeData => {
                            const color = this.getTypeColor(typeData.type.name)
                            const type = { name: typeData.type.name, color: color}
                            types.push(type)
                        })
                        const newPokemon = new Pokemon(
                            data.name, 
                            data.id, 
                            data.sprites.front_default,
                            types,
                            data.height,
                            data.weight
                            )
                        this.pokemons.push(newPokemon)
                        this.pokemons.sort(function(a, b) { 
                            return a.id - b.id  ||  a.name.localeCompare(b.name);
                          });
                    }
                })
        }
    }

    getTypeColor(type: string) {
        if(type == 'fire') {
            return 'rgba(255, 0, 0, .5)'
        } else if (type == 'water'){
            return 'rgba(0, 0, 255, .5)'
        } else if (type == 'grass'){
            return 'rgba(0, 255, 200, .5)'
        } else if (type == 'bug'){
            return 'rgba(0, 255, 0, .5)'
        } else if (type == 'ground'){
            return 'rgba(150, 75, 0, .5)'
        } else if (type == 'electric'){
            return 'rgba(255, 255, 0, .5)'
        } else if (type == 'poison'){
            return 'rgba(200, 62, 200, .5)'
        } else if (type == 'flying'){
            return 'rgba(211, 211, 255, .5)'
        } else if (type == 'fairy'){
            return 'rgba(255, 203, 219, .5)'
        } else if (type == 'normal'){
            return 'rgba(210, 180, 140, .5)'
        } else if (type == 'ice'){
            return 'rgba(135, 206, 250, .5)'
        } else if (type == 'psychic'){
            return 'rgba(227, 28, 121, .5)'
        } else if (type == 'rock'){
            return 'rgba(57, 38, 32, .5)'
        } else if (type == 'fighting'){
            return 'rgba(255, 127, 0, .5)'
        } else if (type == 'fighting'){
            return 'rgba(135, 203, 250, .5)'
        } else if (type == 'steel'){
            return 'rgba(204, 255, 51, .5)'
        } else if (type == 'dragon'){
            return 'rgba(64, 224, 208, .5)'
        }    
        return 'rgba(0, 0, 0, .5)'
    }

}