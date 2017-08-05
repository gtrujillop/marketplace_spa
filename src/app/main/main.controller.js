export class MainController {
  constructor ($timeout, webDevTec, toastr) {
    'ngInject';

    this.awesomeThings = [];
    this.classAnimation = '';
    this.creationDate = 1501898718476;
    this.toastr = toastr;

    this.getProducts(webDevTec);
  }

  getProducts(webDevTec) {
    var self = this;
    webDevTec.getProducts().success(function(data){
      self.products = data;
    }).error(function(){
      self.toastr.error('Could not retrieve products')
    });
  }
}
