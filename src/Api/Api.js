export class Api {
  static baseUrl = 'http://localhost:5000';

  static get(url) {
    return fetch(`${Api.baseUrl}/${url}`).then((result) => result.json());
  }
}