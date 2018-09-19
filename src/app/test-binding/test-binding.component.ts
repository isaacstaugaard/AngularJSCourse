import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-binding',
  templateUrl: './test-binding.component.html',
  styleUrls: ['./test-binding.component.css']
})
export class TestBindingComponent implements OnInit {

	username = "";
	notClickable = true;

  constructor() { }


  ngOnInit() {
  }

  	checkStrings() {
  		if (this.username === "") {
  			return true
  		}
  		else {
  			return false
  		}
  	}

	onUpdateUsername(event: any) {
	  	console.log(event)
	  	this.username = "";
	  }

}
