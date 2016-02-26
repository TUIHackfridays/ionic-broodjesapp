import {Page} from 'ionic-framework/ionic';


@Page({
  templateUrl: 'build/pages/page1/page1.html'
})
export class Page1 {
	constructor() {
    
	    this.items = [
			{title: "Broodje 1", description: "beleg goes here"},
			{title: "Bar", description: "beleg goes here"}
		];
    
    
  }	
}
