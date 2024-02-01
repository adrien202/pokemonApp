import { Component } from '@angular/core';
import {Pokemon} from "../model/pokemon";
import {POKEMONS} from "../model/mock-pokemon";

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styles: [
  ]
})
export class ListPokemonComponent {

  pokemonList: Pokemon[] = POKEMONS;

}
