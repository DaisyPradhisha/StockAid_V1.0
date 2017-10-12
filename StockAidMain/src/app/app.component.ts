import { Component } from '@angular/core';
import {SidenavService} from './services/sidenav.service';

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
  constructor(private sidenavService: SidenavService) {
  }

  ngOnInit(): void {
    
      }

  public toggleSidenav() {
    this.sidenavService
      .openside();
  } 
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
