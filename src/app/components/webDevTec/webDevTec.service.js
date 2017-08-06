export class WebDevTecService {
  constructor ($http) {
    'ngInject';
    this.$http = $http;
    this.urlBase = 'http://localhost:3000/v1';
  }

  getProducts() {
    return this.$http.get(this.urlBase + '/products');
  }

  signup(user) {
    return this.$http.post(this.urlBase + '/users', { user: user });
  }

  login() {

  }

  logout() {

  }

  saveCart() {

  }
}
