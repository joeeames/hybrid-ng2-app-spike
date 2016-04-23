angular.module('app').component('mycomponent', {
  template: '<h2>title: {{$ctrl.title}}</h2>',
  bindings: {
  },
  controller: function() {
    this.title = "This is an ng1 component";
  }
})
