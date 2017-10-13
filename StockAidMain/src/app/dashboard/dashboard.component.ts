import { Component, OnInit ,ViewChild} from '@angular/core';
import {SidenavService} from '../services/sidenav.service';
import {MdSidenav} from "@angular/material";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild('sidenav') public sidenav: MdSidenav;
  constructor(private sidenavService: SidenavService) { }

  ngOnInit() {
    this.sidenavService
    .setSidenav(this.sidenav);
  }
  symbol1="";
  value='';
  name='';
  sector='';
  chartInterval = ['5y', '2y', '1y', 'ytd','6m','3m','1m'];
    isValid:boolean = true;
  
  SelectedStockHandler(symbol:any)
  {
 this.symbol1=symbol;
 this.value=symbol.Symbol;
this.name=symbol.Name;
this.sector=symbol.Sector;
console.log(this.symbol1);
console.log(this.value);
this.isValid=false;
}
displayChart: boolean = true;
}
