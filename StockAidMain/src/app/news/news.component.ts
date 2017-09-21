import { Component, Input,OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Http,Response} from '@angular/http';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent  implements OnInit {

  @Input() symbol;

  constructor(private http:Http){}
  
  datetime='';
  headline='';
  primaryExchange='';
  url='';
  source='';
  filteredSymbol: any;

  ngOnInit()
  {}

  searchNews(){
    this.http.get('https://api.iextrading.com/1.0/stock/'+this.symbol+'/news/last/5')
    .subscribe(
      (res:Response)=>{
        const s= res.json();
        
        this .filteredSymbol=s
        console.log(s);
        
      }
    )
  }
}
