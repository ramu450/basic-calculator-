import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
       result:any;
       operator:string;
       assign:string;
       input = {
         num1: null,
         num2: null
       }
       n1:number;
       n2:number;
       equal:string;
       in1=[];
       in2=[];
       cal=[];
       oper=[];
  constructor() {

  }
  ngOnInit() {

  }
    buttonclick(value){
      this.operator=value;
      this.assign=value;
      this.oper.push(value);

    }
    calculation(value){
      this.equal=value;
      this.n1=this.input.num1;
      this.n2=this.input.num2;
     if(this.operator==='+'){
       this.result = this.n1+this.n2;
       this.in1.push(this.n1);
       this.in2.push(this.n2);
       this.input.num1='';
       this.input.num2='';

     }
     else if(this.operator==='-'){
         this.result= this.n1-this.n2;
         this.in1.push(this.n1);
         this.in2.push(this.n2);
         this.input.num1='';
         this.input.num2='';
     }
     else if(this.operator==='*'){
       this.result= this.n1*this.n2;
       this.in1.push(this.n1);
       this.in2.push(this.n2);
       this.input.num1='';
       this.input.num2='';
   }
     else if(this.operator==='/'){
       if(this.n1>=this.n2){
         this.result= this.n1/this.n2;
         this.in1.push(this.n1);
         this.in2.push(this.n2);
         this.input.num1='';
         this.input.num2='';
       }
       else{
         alert('pls enter the first number bigger');
       }
     }
     else{
       swal('errorr', 'output', 'error');
     }
     this.cal.push(this.result);
     this.operator='';

    }
}
