export class WebDevTecService {
  constructor ($http) {
    'ngInject';
    this.$http = $http;
    this.localUrlBase = 'http://localhost:3000/v1/';
    this.urlBase = 'https://marketplace-api-getp.herokuapp.com/v1/';
  }

  getProducts() {
    return this.$http.get(this.localUrlBase + 'products');
  }

  signup(user) {
    return this.$http.post(this.localUrlBase + 'users', { user: user });
  }

  login(user) {
    return this.$http.post(this.localUrlBase + 'users/sign_in?email=' + user.email + '&password=' + user.password);

  }

  logout() {
    return this.$http.delete(this.localUrlBase + 'users/sign_out');
  }

  saveCart(user, cart) {
    return this.$http.post(
      this.localUrlBase + 'users/' + user.id + '/carts', { cart: cart },
      {
        headers: {
          'X-API-EMAIL': user.email,
          'X-API-TOKEN': user.authentication_token,
          'Content-Type': 'application/json'
        }
      }
    );
  }
}
