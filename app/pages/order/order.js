import {Page, NavParams} from 'ionic-framework/ionic';

@Page({
  templateUrl: 'build/pages/order/order.html'
})
export class OrderModal {
  static get parameters() {
    return [[NavParams]];
  }
  constructor(params) {
    this.title = params.get('title');
  }
  
  close() {
    let data = {};
    this.viewCtrl.dismiss(data);
  }
}
