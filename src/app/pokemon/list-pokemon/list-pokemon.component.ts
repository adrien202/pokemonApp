import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {PokemonService} from "../pokemon.service";
import {Pokemon} from "../model/pokemon";

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styles: [
  ]
})
export class ListPokemonComponent implements OnInit{

  pokemonList: Pokemon[];
  constructor(private router:Router, private pokemonService: PokemonService) {
  }

  goToPokemonDetail(pokemonId:number) {
    this.router.navigate(['/pokemon/'+pokemonId])
  }

  ngOnInit(): void {
    this.pokemonList = this.pokemonService.getPokemonList()
  }

}
