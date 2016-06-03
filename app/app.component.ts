import { Component } from 'angular2/core';
import { BeerListComponent } from './beer-list.component';
import { Beer } from './beer.model';

@Component({
  selector: 'my-app',
  directives: [BeerListComponent],
  template: `
    <div class="container">
      <beer-list
        [beerList]="beers"
        (onBeerSelect)="beerWasSelected($event)">
      </beer-list>
    </div>
  `
})

export class AppComponent {
  public beers: Beer[];
     constructor(){
       this.beers = [
        new Beer("Richard In The Dirt", 0, "Short's Brewing", 5, 12.5, 96),
        new Beer("Santa's Private Reserve", 1 , "Rogue", 8 , 5, 45),
        new Beer("Imperial Stout", 2, "Dark Star", 12, 10.5, 82),
        new Beer("Dopple Shot - Double Bock", 3, "Maui Brewing", 14, 8.2, 21),
        new Beer("Miller High Life", 4, "Miller Brewing", 3, 4.6, 9)
      ];
     }
  beerWasSelected(clickedBeer: Beer): void {
  }
}
