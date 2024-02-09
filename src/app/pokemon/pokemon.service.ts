import { Injectable } from '@angular/core';
import {POKEMONS} from "./model/mock-pokemon";
import {Pokemon} from "./model/pokemon";
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";

@Injectable()
export class PokemonService {

    constructor(private http: HttpClient ) {
    }

  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
        tap((response) => )
    );
  }

  getPokemonById(pokemonId: number): Pokemon|undefined {
    return POKEMONS.find(pokemon => pokemon.id == pokemonId);
  }

  getPokemonTypeList(): string[] {
    return [
        'Plante',
        'Feu',
        'Eau',
        'Insecte',
        'Normal',
        'Electrik',
        'Poison',
        'Fée',
        'Vol',
        'Combat',
        'Psy'
    ];
  }

}
