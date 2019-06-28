export interface IBicycleApi {
  getAllAsync(): Promise<IGetAllResponse[]>;
  getbyIdAsync(id: string): Promise<IGetByIdResponse>;
}
