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

  login(user) {
    return this.$http.post(this.urlBase + '/users/sign_in?email=' + user.email + '&password=' + user.password);

  }

  logout() {
    return this.$http.delete(this.urlBase + '/users/sign_out');
  }

  saveCart() {

  }
}
