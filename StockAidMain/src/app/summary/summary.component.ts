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
       
        
        
      }
    )
  }
}
