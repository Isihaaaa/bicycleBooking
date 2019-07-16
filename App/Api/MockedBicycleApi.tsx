import { IBicycleApi } from './IBicycleApi';

// TODO implement
// public async getAllAsync(): Promise<IGetAllResponse[]>
export default class MockedBicycleApi implements IBicycleApi {
  private bicycles = [
    {
      id: 0,
      name: 'Csepel Royal',
      type: 'fixi',
      year: new Date(),
      color: 'blue',
      image: 'https://webbicikli.hu/shop_seopic/2199/Egyedi-Csepel-Royal-4x-Matt-turk/Csepel-Royal-4x-Matt-turkiz.jpg?time=1557839245',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, placeat?',
      reservation: false,
    },
    {
      id: 1,
      name: 'Csepel Csillag',
      type: 'camping',
      year: new Date(),
      color: 'blue',
      image: 'https://apro.bikemag.hu/static/images/classifieds/eredeti-retro--csepel-camping-csillag--NO.707.jpg',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, placeat?',
      reservation: false,
    },
    {
      id: 2,
      name: 'Csepel BLACKWOOD CRUISER',
      type: 'Cruiser',
      year: new Date(),
      color: 'black',
      image: 'http://www.csepelkerekparuzlet.hu/shop_seopic/1557/93781601BK/585x585,r/Csepel-BW-Boss-Cruiser-FFi-kerekpar-Fekete.jpg?time=1553157210',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, placeat?',
      reservation: false,
    },
    {
      id: 3,
      name: 'Csepel Copy',
      type: 'fixi',
      year: new Date(),
      color: 'blue',
      image:
        'https://www.santafixie.com/media/catalog/product/cache/2/image/900x600/9df78eab33525d08d6e5fb8d27136e95/p/o/poloandbike-williamsburg-newgen-azul-1.jpg',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, placeat?',
      reservation: false,
    },
  ];

  public async getAllAsync(): Promise<IGetAllResponse[]> {
    return this.bicycles;
  }

  public async getbyIdAsync(id: number): Promise<IGetByIdResponse> {
    return this.bicycles.find(el => el.id === id);
  }
}
