export function NavbarDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/navbar/navbar.html',
    scope: {
        creationDate: '='
    },
    controller: NavbarController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class NavbarController {
  constructor (moment, $state, webDevTec, toastr) {
    'ngInject';
    this.$state = $state;
    this.current_user = sessionStorage.getItem('current_user');
    this.webDevTec = webDevTec;
    this.toastr = toastr;
    this.user = {
      first_name: "First name",
      last_name: "Last name",
      email: "user@email.com",
      password: "",
      password_confirmation: ""
    };
  }
  logout() {
    var self = this;
    self.webDevTec.logout().success(function(){
      sessionStorage.clear();
      self.reload();
    }).error(function(){
      self.toastr.error('Unable to logout. Please verify.')
    })
  }

  login(validForm) {
    if (validForm) {
      var self = this;
      self.webDevTec.login(self.user).success(function(data){
        self.user = data.user;
        sessionStorage.setItem('current_user', angular.toJson(self.user));
        self.reload();
        self.toastr.success('Logged in successfully. Welcome,');
      }).error(function(){
        self.toastr.error('Unable to login. Please verify your credentials.');
      });
    }
  }

  reload() {
    this.$state.reload();
  }
}
