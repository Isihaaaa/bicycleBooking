import { BicycleHeader } from './Bicycle';
import { IBicycleApi } from './Api/IBicycleApi';
import BicycleDetail from './components/BicycleDetails/BicycleDetails';

//-Üzleti logika
//-Webhívasok()
//-Error handing

export class BicycleService {
  private _api: IBicycleApi;

  constructor() {
    // this._api = new MockedBicycleApi();
  }

  public async getBicyclesAsync(): Promise<BicycleHeader[]> {
    // TODO
    // 1. call api method const response = await this._api.getAllAsync();
    // 2. map GetAllResponse[] to BicycleHeader[]
    // 3. return mapped list

    return [];
  }

  public async getBicycleAsync(): Promise<BicycleDetail> {
    return undefined;
  }

  public async makeReservationForbicycleAsync(): Promise<boolean> {
    return true;
  }
}
