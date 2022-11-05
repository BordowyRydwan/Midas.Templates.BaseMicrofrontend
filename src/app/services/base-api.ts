export default class BaseApiService {
  protected transformOptions(options: any): Promise<any> {
    return Promise.resolve(options);
  }
}
