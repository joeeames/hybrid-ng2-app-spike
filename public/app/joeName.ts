import { Component, OnInit, Inject } from 'angular2/core';
import {NG1_COMPONENTS} from './ng1components';
// import upgradeAdapter from './upgradeAdapter';

interface Identity {
  currentUser: any,
  setUser: any,
  clearUser: any,
  authenticated: any,
  updateUser: any
}


// const ng1component = upgradeAdapter.upgradeNg1Component('mycomponent');

@Component({
  selector: 'joe-name',
  template: `
  <h1>Hi there, My Name is {{name}}</h1>
  <div>this is a div
    <mycomponent></mycomponent>
  </div>
  `,
  directives: [
    NG1_COMPONENTS
  ]
})
export class JoeName implements OnInit {
  name: string;
  
  constructor(@Inject('currentIdentity') currentIdentity:Identity) {
  // constructor() {
    console.log('constructed JoeName')
    // this.name = "Joey";
    this.name = currentIdentity.currentUser.firstName;
   }

  ngOnInit() { }

}
export default JoeName;