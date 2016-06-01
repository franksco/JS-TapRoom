import {Component, EventEmitter} from 'angular2/core';
import {Beer} from './beer.model';

@Component({
  selector: 'new-beer',
  outputs: ['onSubmitNewBeer'],
  template: `
    <div class="beer-form">
      <h3>Create Beer:</h3>
      <div class="col-md-4">
        <input placeholder="Description" class="input-lg" #newDescription>
      </div>
      <div class="col-md-4">
        <select class="form-control" class="input-lg" #newPriority>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>
      <div class="col-md-4">
        <select class="form-control" class="input-lg" #newCategory>
          <option value="home">Home</option>
          <option value="work">Work</option>
          <option value="hobby">Hobby</option>
        </select>
      </div>
      <button (click)="addBeer(newDescription, newPriority, newCategory)" class="btn btn-success btn-lg add-button">Add</button>
    </div>
  `
})
export class NewBeerComponent {
  public onSubmitNewBeer: EventEmitter<Beer>;
  constructor(){
    this.onSubmitNewBeer = new EventEmitter();
  }
  addBeer(userBeerName: HTMLInputElement, userBreweryName: HTMLInputElement, userBeerPrice: HTMLInputElement, userAlcoholContent: HTMLInputElement){
    var myNewBeer = new Beer(userBeerName.value, 0, userBreweryName.value, parseFloat(userBeerPrice.value), parseFloat(userAlcoholContent.value));
   this.onSubmitNewBeer.emit(myNewBeer);

 }

}
