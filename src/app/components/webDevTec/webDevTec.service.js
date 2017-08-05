export class WebDevTecService {
  constructor ($http) {
    'ngInject';
    this.$http = $http;
    this.urlBase = 'http://localhost:3000/v1';
  }

  getProducts() {
    return this.$http.get(this.urlBase + '/products');
  }
}
