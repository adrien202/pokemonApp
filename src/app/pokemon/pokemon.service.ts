import { Injectable } from '@angular/core';
import {Pokemon} from "./model/pokemon";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, Observer, of, tap} from "rxjs";

@Injectable()
export class PokemonService {

    constructor(private http: HttpClient ) {
    }

  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
        tap((PokemonList) => console.table(PokemonList)),
        catchError((error) => {
            console.log(error);
            return of([])
        })
    );
  }

  getPokemonById(pokemonId: number): Observable<Pokemon|undefined> {
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
        tap((pokemon) => console.table(pokemon)),
        catchError((error)=> {
            console.log(error);
            return of(undefined);
        })
    )
  }

  updatePokemon(pokemon: Pokemon): Observable<null> {
        const httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        };

        return this.http.put<null>('api/pokemons', pokemon, httpOptions).pipe()

  }

    deletePokemonById(pokemonId: number): Observable<null> {
        return this.http.delete<null>(`api/pokemons/${pokemonId}`).pipe();
    }

    addPokemon(pokemon: Pokemon): Observable<null> {
        const httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        };
        return this.http.post<null>('api/pokemons', pokemon, httpOptions).pipe()
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
