import { Bicycle } from "./Bicycle";


interface IMockedLoginApiProps{

}
export default class MockedLoginApi {
    public getBicycle():Promise{


    const bicycleResponse = new BicycleResponse();

    const bicycle = new Bicycle();
    bicycle.name='csepe royale 4 ';
    bicycle.type='fixi';
    bicycle.year='2017';
    bicycle.color='blue';
    bicycle.link='https://webbicikli.hu/shop_seopic/2199/Egyedi-Csepel-Royal-4x-Matt-turk/Csepel-Royal-4x-Matt-turkiz.jpg?time=1557839245'


    const ajaxResponse={
        response: bicycleResponse,
        status: 200,
        responseText: '',
        responseType: ''
    }

    const result = new Promise (resolve, reject) =>{
        resolve(ajaxResponse);
    }

    return result;
}
//     const bicycle1 = new Bicycle('csepe royale 4', 'fixi','2017','blue','https://webbicikli.hu/shop_seopic/2199/Egyedi-Csepel-Royal-4x-Matt-turk/Csepel-Royal-4x-Matt-turkiz.jpg?time=1557839245');
//     const bicycle2 = new Bicycle('wtp crysis', 'bmx', '2011', 'purple','https://ep1.pinkbike.org/p4pb8500995/p4pb8500995.jpg');
//     const bicycle3 = new Bicycle('Csepel Csillag','kemping','1987','blue','https://img.jofogas.hu/hdimages/_248111405380379.jpg');


}