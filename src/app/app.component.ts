import {Component, OnInit} from '@angular/core';
import {POKEMONS} from "./model/mock-pokemon";
import {Pokemon} from "./model/pokemon";

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styles: []
})
export class AppComponent implements OnInit {

  pokemonList: Pokemon[] = POKEMONS;

  ngOnInit(): void {
    console.log(this.pokemonList)
    this.selectPokemon(POKEMONS[0])
  }

  selectPokemon(pokemon:Pokemon) {
    console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}`)
  }
}
