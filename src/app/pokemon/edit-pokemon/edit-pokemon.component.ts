import { Component, OnInit } from '@angular/core';
import {Pokemon} from "../model/pokemon";
import {ActivatedRoute} from "@angular/router";
import {PokemonService} from "../pokemon.service";

@Component({
  selector: 'app-edit-pokemon',
  template: `
    <div class="d-flex justify-content-center align-items-center">
      <div><h2>Editer {{ pokemon?.name }}</h2>
        <p *ngIf="pokemon">
          <img [src]="pokemon.picture">
        </p></div></div>
    <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
  `,
  styles: [
  ]
})
export class EditPokemonComponent implements OnInit {

  pokemon: Pokemon|undefined;
  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) { }

  ngOnInit(): void {
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    if (pokemonId) {
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
    } else {
      this.pokemon = undefined;
    }
  }

}
