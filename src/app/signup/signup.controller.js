export class SignupController {
  constructor ($timeout, webDevTec, toastr, $state) {
    'ngInject';
    this.toastr = toastr;
    this.webDevTec = webDevTec
    this.$state = $state;
    this.user = {
      first_name: "First name",
      last_name: "Last name",
      email: "user@email.com",
      password: "",
      password_confirmation: ""
    }
  }

  signup(validForm) {
    if (validForm) {
      var self = this;
      self.webDevTec.signup(self.user).success(function(data){
        self.user = data.user;
        sessionStorage.setItem('current_user', angular.toJson(self.user));
        self.toastr.success('User was created.');
        self.user = null;
        self.$state.go('home');
      }).error(function(){
        self.toastr.error('Could not create user')
      });
    }
  }
}
