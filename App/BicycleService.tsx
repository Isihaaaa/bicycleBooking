import { BicycleHeader, BicycleDetails } from './Bicycle';
import { IBicycleApi } from './Api/IBicycleApi';
import MockedBicycleApi from './Api/MockedBicycleApi';

export class BicycleService {
  private _api: IBicycleApi;

  constructor() {
    this._api = new MockedBicycleApi();
  }

  public async getBicyclesAsync(): Promise<BicycleHeader[]> {
    let bicycleHeaders = [];

    // TODO
    // 1. call api method const response = await this._api.getAllAsync();
    const response = await this._api.getAllAsync();

    // 2. map GetAllResponse[] to BicycleHeader[]
    response.map(el => {
      bicycleHeaders.push(el);
    });

    // 3. return mapped list
    return bicycleHeaders;
  }

  public async getBicycleAsync(id): Promise<BicycleDetails[]> {
    let bicycleDetails = [];

    const response = await this._api.getbyIdAsync();

    response.map(el => bicycleDetails.push(el));

    const result = bicycleDetails.filter(el => {
      el.id === id;
    });

    return result;
  }

  public async makeReservationForbicycleAsync(reservation): Promise<boolean> {
    reservation ? (reservation = false) : (reservation = true);

    return true;
  }
}
