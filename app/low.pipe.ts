import {Pipe, PipeTransform} from 'angular2/core';
import {Beer} from './beer.model';

@Pipe({
  name: "low",
  pure: false
})
export class LowPipe implements PipeTransform {
  transform(input: Beer[], args) {
    var desiredLowState = args[0];
    if(desiredLowState === "low") {
      return input.filter((beer) => {
        return beer.low;
      });
    } else if (desiredLowState === "notLow") {
      return input.filter((beer) => {
        return !beer.low;
      });
    } else {
      return input;
    }

  }
}
