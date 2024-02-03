import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div class="text-center">
    <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png" class="img-fluid" alt="Pokemon Image">
    <h1 class="mb-3">Hey, cette page n'existe pas !</h1>
    <a href="/pokemons" class="btn btn-outline-primary">
        Retourner à l'accueil
    </a>
</div>
  `,
  styles: [
  ]
})
export class PageNotFoundComponent {


}
