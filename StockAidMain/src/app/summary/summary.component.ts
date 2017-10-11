import { Component, Input,OnInit ,SimpleChanges } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Http,Response} from '@angular/http';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

 


  @Input() symbol;
  constructor(private http:Http){}
  filteredSymbol: any;
  beta='';
  marketcap='';
  latestEPS='';
  latestEPSDate='';
  dividendYield='';
  exDividendDate='';
  week52change='';
  profitMargin='';




  ngOnChanges(changes: SimpleChanges)
  
  {

  this.searchSummary(this.symbol);
  
  }

  ngOnInit() {
  }

  searchSummary(symbol:string)
  {
    this.http.get('https://api.iextrading.com/1.0/stock/'+this.symbol+'/stats')
    .subscribe(
      (res:Response)=>{
        const s= res.json();
        console.log(s);
        this.beta=s.beta;
        this.marketcap=s.marketcap;
        this.latestEPS=s.latestEPS;
        this.latestEPSDate=s.latestEPSDate;
        this.dividendYield=s.dividendYield;
        this.exDividendDate=s.exDividendDate;
        this.week52change=s.week52change;
        this.profitMargin=s.profitMargin;
       
        
        
      }

      
    )
  }
}
