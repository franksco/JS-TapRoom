import { Component, EventEmitter } from 'angular2/core';
import { BeerComponent } from './beer.component';
import { Beer } from './beer.model';
import { EditBeerDetailsComponent } from './edit-beer-details.component';
import { NewBeerComponent } from './new-beer.component';
import {LowPipe} from './low.pipe';
import {AlcPipe} from './alc.pipe';

@Component({
  selector: 'beer-list',
  inputs: ['beerList'],
  outputs: ['onBeerSelect'],
  pipes: [LowPipe, AlcPipe],
  directives: [BeerComponent, EditBeerDetailsComponent, NewBeerComponent],
  templateUrl: 'app/beer-list.component.html'
})

export class BeerListComponent {
  public beerList: Beer[];
  public onBeerSelect: EventEmitter<Beer>;
  public selectedBeer: Beer;
  public filterLow: string = "notLow";
  public filterAlc: string = "all";
  constructor() {
    this.onBeerSelect = new EventEmitter();
  }
  beerClicked(clickedBeer: Beer): void {
    this.selectedBeer = clickedBeer;
    this.onBeerSelect.emit(clickedBeer);
  }
  createBeer(newBeer: Beer): void {
    newBeer.id = this.beerList.length;
    this.beerList.push(newBeer);
  }
  onChangeLow(filterOption) {
    this.filterLow = filterOption;
  }
  onChangeAlc(filterOption) {
    this.filterAlc = filterOption;
  }
}
