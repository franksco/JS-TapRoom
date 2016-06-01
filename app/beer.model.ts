export class Beer {
  public low: boolean = false;
  public pintsRemaining: number = 124;
  constructor(public nameOfBeer: string, public id: number, public brand: string, public price: number, public alcoholContent: number) {

  }
}
