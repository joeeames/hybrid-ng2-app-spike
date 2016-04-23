import {NameParser} from '../admin/parseNames';
import upgradeAdapter from './upgradeAdapter';
import {JoeName} from './joeName';
// import ng1App from '../app';
// import {currentIdentityService} from '../security/currentIdentity';

// ng1App.factory('currentIdentity', currentIdentityService);

upgradeAdapter.addProvider(NameParser);


// window.upgradeAdapter = upgradeAdapter;
// console.log('upgrade adapter set');


upgradeAdapter.upgradeNg1Provider("currentIdentity");
// upgradeAdapter.upgradeNg1Component("my-ng1component");



console.log('upgrading currentIdentity provider');


angular.element(document).ready(() => {
  // angular.bootstrap(document.body, ['app']);
  
  angular.module('app').factory('nameParser', upgradeAdapter.downgradeNg2Provider(NameParser))
  angular.module('app').directive('joeName', 
    <angular.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(JoeName));
  

  
  
  upgradeAdapter.bootstrap(document.documentElement, ['app']);
  

  
});