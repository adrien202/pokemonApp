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
  pokemonSelected: Pokemon| undefined;

  ngOnInit(): void {
    console.log(this.pokemonList)
  }

  selectPokemon(pokemonId:string) {
    const pokemon: Pokemon|undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId)
    if (pokemon) {
      console.log(`Vous avez demandé le pokémon ${pokemon.name}`)
    } else {
      console.log(`Vous avez demandé un pokémon qui n'existe pas`)
    }
    this.pokemonSelected= pokemon

  }
}
