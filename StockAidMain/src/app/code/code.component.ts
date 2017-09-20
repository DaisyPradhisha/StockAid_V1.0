import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Http,Response} from '@angular/http';


@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class AutocompleteSimpleExample {
  
  sym:string;

  constructor(private http:Http){}
  symbol='';
  companyName='';
  latestPrice='';
  primaryExchange='';
  sector='';

  searchStock(){
    this.http.get('https://api.iextrading.com/1.0/stock/'+this.symbol+'/quote')
    .subscribe(
      (res:Response)=>{
        const s= res.json();
        console.log(s);
        this.companyName=s.companyName;
        this.latestPrice=s.latestPrice;
        this.primaryExchange=s.primaryExchange;
        this.sector=s.sector;
      }
    )

  }
    myControl: FormControl = new FormControl();
  
    options = [
      'GE',
      'Aapl',
      'AA'
     ];
  
  }
