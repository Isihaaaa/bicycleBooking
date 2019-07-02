export interface IBicycleApi {
  getAllAsync(): Promise<IGetAllResponse[]>;
  getbyIdAsync(): Promise<IGetByIdResponse[]>;
}
