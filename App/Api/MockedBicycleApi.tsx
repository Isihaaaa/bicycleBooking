// TODO implement
// public async getAllAsync(): Promise<IGetAllResponse[]>
export default class MockedBicycleApi {
  public async getAllAsync(): Promise<IGetAllResponse[]> {
    const bicycles = await [
      {
        id: 0,
        name: 'Csepel Royal',
        type: 'fixi',
        year: new Date(),
        color: 'blue',
        image: 'https://webbicikli.hu/shop_seopic/2199/Egyedi-Csepel-Royal-4x-Matt-turk/Csepel-Royal-4x-Matt-turkiz.jpg?time=1557839245',
      },
      {
        id: 1,
        name: 'Csepel Csillag',
        type: 'camping',
        year: new Date(),
        color: 'blue',
        image: 'https://apro.bikemag.hu/static/images/classifieds/eredeti-retro--csepel-camping-csillag--NO.707.jpg',
      },
      {
        id: 2,
        name: 'Csepel BLACKWOOD CRUISER',
        type: 'Cruiser',
        year: new Date(),
        color: 'black',
        image:
          'http://www.csepelkerekparuzlet.hu/shop_seopic/1557/93781601BK/585x585,r/Csepel-BW-Boss-Cruiser-FFi-kerekpar-Fekete.jpg?time=1553157210',
      },
    ];

    return bicycles;
  }

  public async getbyIdAsync(): Promise<IGetByIdResponse[]> {
    const bicycleDetails = await [
      {
        id: 0,
        name: 'Csepel Royal',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, excepturi.',
        type: 'fixi',
        year: new Date(),
        color: 'blue',
        image: 'https://webbicikli.hu/shop_seopic/2199/Egyedi-Csepel-Royal-4x-Matt-turk/Csepel-Royal-4x-Matt-turkiz.jpg?time=1557839245',
        reservation: false,
      },
      {
        id: 1,
        name: 'Csepel Csillag',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus adipisci quibusdam error laborum!',
        type: 'camping',
        year: new Date(),
        color: 'blue',
        image: 'https://apro.bikemag.hu/static/images/classifieds/eredeti-retro--csepel-camping-csillag--NO.707.jpg',
        reservation: false,
      },
      {
        id: 2,
        name: 'Csepel BLACKWOOD CRUISER',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, dicta. Cum alias minus cumque!',
        type: 'Cruiser',
        year: new Date(),
        color: 'black',
        image:
          'http://www.csepelkerekparuzlet.hu/shop_seopic/1557/93781601BK/585x585,r/Csepel-BW-Boss-Cruiser-FFi-kerekpar-Fekete.jpg?time=1553157210',
        reservation: false,
      },
    ];

    return bicycleDetails;
  }
}
