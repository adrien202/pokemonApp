import { Component } from '@angular/core';
import {Pokemon} from "../model/pokemon";
import {POKEMONS} from "../model/mock-pokemon";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styles: [
  ]
})
export class ListPokemonComponent {

  pokemonList: Pokemon[] = POKEMONS;

  constructor(private router:Router) {
  }

  goToPokemonDetail(pokemonId:number) {
    this.router.navigate(['/pokemon/'+pokemonId])
  }

}
