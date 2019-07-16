import { BicycleHeader, BicycleDetails } from './Bicycle';
import { IBicycleApi } from './Api/IBicycleApi';
import MockedBicycleApi from './Api/MockedBicycleApi';

export class BicycleService {
  private _api: IBicycleApi;

  constructor() {
    this._api = new MockedBicycleApi();
  }

  public async getBicyclesAsync(): Promise<BicycleHeader[]> {
    // TODO
    // 1. call api method const response = await this._api.getAllAsync();
    const response = await this._api.getAllAsync();

    // 2. map GetAllResponse[] to BicycleHeader[]
    return response.map(el => {
      // 3. return mapped list
      return new BicycleHeader(el.id, el.name, el.type, el.year, el.color, el.image);
    });
  }

  public async getBicycleAsync(currentBicycleId): Promise<BicycleDetails> {
    const response = await this._api.getbyIdAsync();

    // const bicycle = response.filter(bicycle => {
    //   bicycle.id === currentBicycleId;
    // });

    const bicycle = response[currentBicycleId];

    return new BicycleDetails(
      bicycle.id,
      bicycle.name,
      bicycle.description,
      bicycle.type,
      bicycle.year,
      bicycle.color,
      bicycle.image,
      bicycle.reservation
    );
  }

  public async makeReservationForbicycleAsync(reservation): Promise<boolean> {
    return reservation ? (reservation = false) : (reservation = true);
  }
}
