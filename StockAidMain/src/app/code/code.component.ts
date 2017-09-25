  import { Component, OnInit,  Output, EventEmitter  } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Http,Response} from '@angular/http';
import { DataService } from '../services/data.service'; 
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import { MdOptionSelectionChange ,MdSelect,MdAutocompleteSelectedEvent} from "@angular/material/material";


@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})

export class AutocompleteSimpleExample implements OnInit{
  
  stateCtrl: FormControl;
  filteredSymbol: any;
  allSymbols;
  symbol='';
  companyName='';
  latestPrice='';
  primaryExchange='';
  sector='';

  @Output() selectedStock = new EventEmitter<any>();

  constructor(private dataService: DataService,private http:Http)
   {
    this.stateCtrl = new FormControl();
   }
  
  ngOnInit()
  {
    this.dataService.fetchData()
      .subscribe(
        (data) => {
          this.allSymbols = data.StockList;
          this.filteredSymbol = this.stateCtrl.valueChanges
            .startWith(null)
            .map(val => val ? this.filter(val) : this.allSymbols);
        }
    );
    
  }

  filter(Symbol)
   {
   return this.allSymbols.filter(Symb => new RegExp(`^${Symbol}`, '').test(Symb.Symbol)); 
  }
  
  displayFn(Symb) 
  {
      return Symb ? Symb.Name : Symb;
   }

   selected(event: MdOptionSelectionChange, Symb: any) 
    {
    if (event.source.selected) 
    {
      this.selectedStock.emit(Symb);
      this.symbol=Symb.Symbol;
    }
    }

    searchStock()
    {
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
}
