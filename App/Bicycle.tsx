interface IBicycle {
  id: number;
  name: string;
  type: string;
  year: Date;
  color: string;
  image: string;
}

export class BicycleHeader implements IBicycle {
  constructor(public id: number, public name: string, public type: string, public year: Date, public color: string, public image: string) {}
}

export class BicycleDetails extends BicycleHeader implements IBicycle {
  constructor(
    public id: number,
    public name: string,
    public type: string,
    public year: Date,
    public color: string,
    public image: string,
    public description: string
  ) {
    super(id, name, type, year, color, image);
  }
}
