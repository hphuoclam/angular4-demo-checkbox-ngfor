import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  ranges  = Array.from(Array(500).keys());
  checkArr = [];
  results = [];
  changeCheckbox(item) {
  	if(this.checkArr[item]){
  		this.results.push(item);
  	}else{
  		this.results.splice(this.results.indexOf(item), 1);
  	}
  }
}
