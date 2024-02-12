import { Component, OnInit } from '@angular/core';
import {Pokemon} from "../model/pokemon";

@Component({
  selector: 'app-add-pokemon',
  template: `
    <div class="d-flex justify-content-center align-items-center">
      <h2>Ajouter un pokemon</h2>
    </div>
    <app-pokemon-form [pokemon]="pokemon"></app-pokemon-form>
  `,
  styles: [
  ]
})
export class AddPokemonComponent implements OnInit {
  pokemon: Pokemon;

  constructor() { }

  ngOnInit(): void {
    this.pokemon = new Pokemon();
  }

}
