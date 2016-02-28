import {Page, Modal, NavController, ViewController} from 'ionic-framework/ionic';
import {OrderModal} from '../order/order';

@Page({
  templateUrl: 'build/pages/page1/page1.html'
})
export class Page1 {
  static get parameters() {
    return [[NavController]];
  }
  constructor(nav) {
    this.items = [
      {title: "Broodje 1", description: "beleg goes here"},
      {title: "Bar", description: "beleg goes here"}
    ];
    
    this.nav = nav;
  }
  
  itemSelected(item) {
    let orderModal = Modal.create(OrderModal, item);
    this.nav.present(orderModal);
  }
}
