export class MainController {
  constructor ($timeout, $state, webDevTec, toastr, Popeye, $rootScope) {
    'ngInject';

    this.awesomeThings = [];
    this.classAnimation = '';
    this.creationDate = 1501898718476;
    this.toastr = toastr;
    this.$state = $state;
    this.Popeye = Popeye;
    this.$rootScope = $rootScope;
    this.current_user = JSON.parse(sessionStorage.getItem('current_user'));
    this.getProducts(webDevTec);
  }

  getProducts(webDevTec) {
    var self = this;
    webDevTec.getProducts().success(function(data){
      self.products = data;
    }).error(function(){
      self.toastr.error('Could not retrieve products');
    });
  }

  signup() {
    this.$state.go('signup');
  }


  openProductProfile(product) {
    var self = this;
    this.$rootScope.product = product;
    // Open a modal to show the selected user profile
    var modal = self.Popeye.openModal({
      controller: "ProductController as prod",
      templateUrl: "app/product/showProduct.html"
    });

    // Show a spinner while modal is resolving dependencies
    self.showLoading = true;
    modal.resolved.then(function() {
      self.showLoading = false;
    });
  }
}
