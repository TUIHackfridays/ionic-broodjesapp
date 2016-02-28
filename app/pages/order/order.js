import {Page, NavParams, ViewController} from 'ionic-framework/ionic';

@Page({
  templateUrl: 'build/pages/order/order.html'
})
export class OrderModal {
  static get parameters() {
    return [[NavParams], [ViewController]];
  }
  constructor(params, viewCtrl) {
    this.viewCtrl = viewCtrl;
    this.title = params.get('title');
  }
  
  close() {
    let data = {};
    this.viewCtrl.dismiss(data);
  }
}
