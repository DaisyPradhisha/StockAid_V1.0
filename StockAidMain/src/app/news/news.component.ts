import { Component,  } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Http,Response} from '@angular/http';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent   {

  constructor(private http:Http){}
  symbol='';
  datetime='';
  headline='';
  primaryExchange='';
  url='';
  source='';

  searchStock(){
    this.http.get('https://api.iextrading.com/1.0/stock/'+this.symbol+'/news')
    .subscribe(
      (res:Response)=>{
        const s= res.json();
        console.log(s);
        this.datetime=s.datetime;
        this.headline=s.headline;
        this.url=s.url;
        this.source=s.source;
        
      }
    )
  }
}
