import {Page} from 'ionic-framework/ionic';
import {TabsPage} from '../tabs/tabs';
import {App, Platform, NavController} from 'ionic-framework/ionic';


@Page({
  templateUrl: 'build/pages/login/login.html'
})
export class Login {
  static get parameters() {
    return [[NavController], [Platform]];
  }

  constructor(nav, platforml) {
    this.nav = nav;
  }

  login(){
    this.nav.push( TabsPage );
  }
}
