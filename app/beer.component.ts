import { Component } from 'angular2/core';
import { Beer } from './beer.model';

@Component({
    selector: 'beer-display',
    inputs: ['beer'],
  template: `
  <div class="mycheckbox">
    <input *ngIf="beer.low" type="checkbox" checked (click)="toggleLow(false)"/>
    <input *ngIf="!beer.low" type="checkbox" (click)="toggleLow(true)"/>
    <label><strong *ngIf="beer.low"><u>{{ beer.nameOfBeer }}, {{ beer.brand}}, {{ beer.price}}, {{ beer.alcoholContent}}</u></strong><span *ngIf="!beer.low">{{ beer.nameOfBeer }}, {{ beer.brand}}, {{ beer.price}}, {{ beer.alcoholContent}}</span></label>
  </div>
  `
})

export class BeerComponent {
  public beer: Beer;
  toggleLow(setState: boolean){
    this.beer.low = setState;
  }
}
