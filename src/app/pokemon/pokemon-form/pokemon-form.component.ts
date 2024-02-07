import {Component, Input, OnInit} from '@angular/core';
import {PokemonService} from "../pokemon.service";
import {Pokemon} from "../model/pokemon";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styles: [
  ]
})
export class PokemonFormComponent implements OnInit {
  @Input() pokemon: Pokemon;
  types: string[];
  constructor(private pokemonService: PokemonService, private router: Router) { }

  ngOnInit(): void {
    this.types = this.pokemonService.getPokemonTypeList();
  }

  hasType(type: string): boolean {
    return this.pokemon.types.includes(type);
  }

  selectType($event: Event, type: string): void {
    const isChecked = ($event.target as HTMLInputElement).checked;

    if (isChecked) {
      this.pokemon.types.push(type);
    } else {
      let indexToRemove = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(indexToRemove, 1);
    }
  }

  onSubmit() {
    console.log('Submit form !');
    this.router.navigate(['/pokemon', this.pokemon.id]);
  }

}