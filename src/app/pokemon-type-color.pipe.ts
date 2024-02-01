import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonTypeColor'
})
export class PokemonTypeColorPipe implements PipeTransform {

  transform(type: string): string {

    let color: string;

    switch (type) {
      case 'Feu':
        color = 'bg-danger';
        break;
      case 'Eau':
        color = 'bg-primary';
        break;
      case 'Plante':
        color = 'bg-success';
        break;
      case 'Insecte':
        color = '';
        break;
      case 'Normal':
        color = '';
        break;
      case 'Vol':
        color = '';
        break;
      case 'Poison':
        color = 'bg-info';
        break;
      case 'Fée':
        color = '';
        break;
      case 'Psy':
        color = 'bg-secondary-subtle';
        break;
      case 'Electrik':
        color = 'bg-warning';
        break;
      case 'Combat':
        color = '';
        break;
      default:
        color = 'bg-primary';
        break;
    }

    if (color == '') {
      color = 'bg-light'
    }


    return 'badge ' + color;

  }

}
