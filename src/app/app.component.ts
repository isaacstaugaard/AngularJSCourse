import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //styles: [`
  //	h3 { 
  //		color: purple
  //	}
  //`]
})
export class AppComponent {
	buttonClicks = [];
	showSecret = false;


	whenClicked(){
		this.showSecret = !this.showSecret
  		//this.buttonClicks.push(this.buttonClicks.length + 1)
  		this.buttonClicks.push(new Date());
  	}
}
