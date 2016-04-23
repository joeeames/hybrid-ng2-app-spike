angular.module('app').factory('currentIdentity', currentIdentityService);

function currentIdentityService($http, $q) {
  return {
    // currentUser: null,
    currentUser: {firstName: "Joseph", lastName: "Eames"},
    
    setUser: function(user) {
      this.currentUser = user;
    },
    clearUser: function() {
      this.currentUser = null;
    },
    authenticated: function() {
      return !!this.currentUser;
    },
    updateUser: function(newUserObj) {
      var dfd = $q.defer();
      
      
      $http.put('/api/users/' + this.currentUser.id, newUserObj).then(function(response) {
        this.currentUser.firstName = newUserObj.firstName;
        this.currentUser.lastName = newUserObj.lastName;
        dfd.resolve();
      }.bind(this), function(response) {
        dfd.reject("Error Logging Out");
      })
      return dfd.promise;
    }
  }
};