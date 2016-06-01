import {Component, EventEmitter} from 'angular2/core';
import {Beer} from './beer.model';

@Component({
  selector: 'new-beer',
  outputs: ['onSubmitNewBeer'],
  template: `
    <div class="form clearfix">
      <h3>Create Beer:</h3>
      <div class="form-group">
        <input placeholder="Name Of Beer" class="input-lg" #newBeerName>
      </div>
      <div class="form-group">
        <input placeholder="Name Of Brewery" class="input-lg" #newBreweryName>
      </div>
      <div class="form-group">
        <input placeholder="Price Of Beer($)" class="input-lg" #newPrice>
      </div>
      <div class="form-group">
        <input placeholder="Alcohol Content(%)" class="input-lg" #newAlc>
      </div>
      <button (click)="addBeer(newBeerName, newBreweryName, newPrice, newAlc)" class="btn btn-success btn-lg add-button">Add</button>
    </div>
  `
})
export class NewBeerComponent {
  public onSubmitNewBeer: EventEmitter<Beer>;
  constructor(){
    this.onSubmitNewBeer = new EventEmitter();
  }
  addBeer(userBeerName: HTMLInputElement, userBreweryName: HTMLInputElement, userBeerPrice: HTMLInputElement, userAlcoholContent: HTMLInputElement){
    var myNewBeer = new Beer(userBeerName.value, 0, userBreweryName.value, parseFloat(userBeerPrice.value), parseFloat(userAlcoholContent.value), 124 );
   this.onSubmitNewBeer.emit(myNewBeer);

 }

}
