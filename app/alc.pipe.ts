import {Pipe, PipeTransform} from 'angular2/core';
import {Beer} from './beer.model';

@Pipe({
  name: "alc",
  pure: false
})
export class AlcPipe implements PipeTransform {
  transform(input: Beer[], args) {
    var desiredAlcState = args[0];
    if(desiredAlcState === "high") {
      return input.filter((beer) => {
        return beer.alcoholContent >= 10;
      });
    } else if (desiredAlcState === "medium") {
      return input.filter((beer) => {
        return beer.alcoholContent >= 7 && beer.alcoholContent < 10;
      });
    } else if (desiredAlcState === "low") {
      return input.filter((beer) => {
        return beer.alcoholContent < 7;
      });
    }else {
      return input;
    }

  }
}
