import {Component} from 'angular2/core';
import {Beer} from './beer.model';

@Component({
  selector: 'edit-beer-details',
  inputs: ['beer'],
  template: `
    <h3>Edit Description: </h3>
    <input [(ngModel)]="beer.nameOfBeer" class="col-sm-8 input-lg beer-form"/>
    <input [(ngModel)]="beer.brand" class="col-sm-8 input-lg beer-form"/>
    <input [(ngModel)]="beer.price" class="col-sm-8 input-lg beer-form"/>
    <input [(ngModel)]="beer.alcoholContent" class="col-sm-8 input-lg beer-form"/>
    <input [(ngModel)]="beer.pintsRemaining" class="col-sm-8 input-lg beer-form"/>
  `
})
export class EditBeerDetailsComponent {
  public beer: Beer;
}
