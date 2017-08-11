export class CartController {
  constructor (toastr, Popeye, modal, webDevTec) {
    'ngInject';
    this.toastr = toastr;
    this.Popeye = Popeye;
    this.modal = modal;
    this.tempCart = angular.fromJson(sessionStorage.getItem('temp_cart'));
    this.current_user = angular.fromJson(sessionStorage.getItem('current_user'));
    this.webDevTec = webDevTec;
  }

  removeItem(product) {
    for (var i = 0; i < this.tempCart.length; i++) {
      if (this.tempCart[i] === product) {
        this.tempCart.splice(i, 1);
        i = this.tempCart.length;
      }
    }
    sessionStorage.setItem('temp_cart', angular.toJson(this.tempCart));
  }

  total() {
    if (angular.isArray(this.tempCart))
      return this.tempCart.reduce(function (acum, prod) { return acum + prod.price_cents}, 0);
    else {
      return 0
    }
  }

  purchase() {
    if (confirm("Do you want to purchase this product(s)")) {
      var self = this;
      self.webDevTec.saveCart(self.current_user, self.tempCart).success(function(){
        self.toastr.success('Products were purchased successfully.');
      }).error(function(){
        self.toastr.error('Unable to purchase products.');
      });
      self.modal.close();
    }
  }

  // summarizeElements() {
  //   if (Array.isArray(this.tempCart)) {
  //     this.tempCart
  //   } else {
  //     return [];
  //   }
  // }
}
