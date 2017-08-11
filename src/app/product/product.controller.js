export class ProductController {
  constructor (toastr, Popeye, modal, $rootScope) {
    'ngInject';
    this.toastr = toastr;
    this.Popeye = Popeye;
    this.modal = modal;
    this.product = $rootScope.product;
    this.current_user = angular.fromJson(sessionStorage.getItem('current_user'));
    this.tempCart = angular.fromJson(sessionStorage.getItem('temp_cart'));
  }

  addToCart(product) {
    if (this.tempCart == undefined) {
      this.tempCart = [product];
    } else {
      this.tempCart.push(product);
    }
    sessionStorage.setItem('temp_cart', angular.toJson(this.tempCart));
    this.modal.close();
  }
}
