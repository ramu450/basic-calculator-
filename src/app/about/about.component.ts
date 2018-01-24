import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  operator:string;
  result:any;
  inputs = {
    num1: ""
  }
  num2:any;
  constructor() { }

  ngOnInit() {
  }
  calculator(value){
    this.inputs.num1=this.inputs.num1+value;

  }
  buttonclick(value){
    this.operator=value;
    this.inputs.num1+=this.operator;

  }
  output(){
    this.num2=parseFloat(this.inputs.num1);
    this.num2=this.num2+2;
    swal(this.num2, 'output', 'success');
  }
  clear(){
    this.inputs.num1="";
  }
}
