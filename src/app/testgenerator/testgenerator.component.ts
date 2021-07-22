import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-testgenerator',
  templateUrl: './testgenerator.component.html',
  styleUrls: ['./testgenerator.component.scss']
})
export class TestgeneratorComponent implements OnInit {

  constructor() { }
  generatedStrings:Array<any> = []
  stream$ = interval(100)
  makeString() {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }
  checkString(string:string){
    console.log(string)
    if(this.checkPalindrome(string)){
      this.generatedStrings.push({string:string,class:'red'})
    }else if(string.match(/^[1-9]+$/) != null){
      this.generatedStrings.push({string:string,class:'blue'})
    }else if(string.includes('0')){
      this.generatedStrings.push({string:string,class:'hidden'})
    }
  }
  checkPalindrome(string:string){
  var re = /[\W_]/g;
  var lowRegStr = string.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
  }

  ngOnInit(): void {
    this.stream$.subscribe({
      next: i => {
        let string = this.makeString();
        this.checkString(string);
      }
    })
  }

}
