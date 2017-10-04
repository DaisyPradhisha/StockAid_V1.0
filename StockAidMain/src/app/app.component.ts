import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  symbol1="";
  value='';
  name='';
  sector='';
  SelectedStockHandler(symbol:any)
  {
 this.symbol1=symbol;
 this.value=symbol.Symbol;
this.name=symbol.Name;
this.sector=symbol.Sector;
console.log(this.symbol1);
console.log(this.value);
}
}
