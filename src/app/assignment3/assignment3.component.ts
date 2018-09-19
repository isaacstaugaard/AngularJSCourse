import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {
	numClicks: number = 0;
	buttonClicks = [];

  constructor() { }

  ngOnInit() {
  }

  whenClicked(){
  	this.numClicks = this.numClicks + 1;
  	this.buttonClicks.push('h');
  }

}
