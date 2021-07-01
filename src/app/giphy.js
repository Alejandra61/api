export class Giphy {
  constructor(keyword) {
    this.keyword = keyword;
    this.endpoint = "URL-base"; // No se esta usando de momento
    this.api_key = "XIc0wxtTo74x8vfSCP39lZgqFyuohIRA";
  }
  //se va a devolver de manera asincrona, no implementado
  static getUrlAsync(keyword, callback) {
    return new Giphy();
  }
}
