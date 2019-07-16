export interface IBicycleApi {
  getAllAsync(): Promise<IGetAllResponse[]>;
  getbyIdAsync(id: number): Promise<IGetByIdResponse>;
}
