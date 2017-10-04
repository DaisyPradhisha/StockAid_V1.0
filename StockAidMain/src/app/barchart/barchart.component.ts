import { Component, OnInit, ViewChild,Input,SimpleChanges} from '@angular/core';
import {Http, Response} from '@angular/http';
import {BchartService} from '../services/bchart.service';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { UIChart } from "primeng/primeng";
import { Chart } from "../structure/chart";

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})

export class BarchartComponent  {

  @ViewChild("Chart") Chart: UIChart;
  @Input() symbol;

data1=new Array<Chart>();
label=new Array<any>();
highh=new Array<any>();
loww=new Array<any>();
change=new Array<any>();
  ngOnChanges(changes: SimpleChanges)
      {
    this.getValueFromChart(this.symbol);
        
     }
  hData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
      }
    ]
  }  
 constructor(private bchartService:BchartService) { }


getValueFromChart(sym : string)
{
         this.bchartService.getchart(sym).subscribe((r)=>
   {
    this.data1=r;
    Object.keys(this.data1).forEach(element => {
   
   this.label.push(this.data1[element].date);
   this.highh.push(this.data1[element].high);
   this.change.push(this.data1[element].change);
  // this.loww.push(this.data1[element].low);
  
  });console.log(this.data1);console.log(this.label);console.log(this.change);
  this.SetValuesAndUpdateChart(this.symbol, this.label, this.change);
}
)
 }
 SetValuesAndUpdateChart(symbol, label, change) {
  this.hData.labels = label;
  this.hData.datasets[0] = {
    //label: symbol ? symbol : '',
    label:'change',
    data: change,
    fill: false,
    backgroundColor: 'purple',
    borderColor:'pink',
      }, 
  /*this.hData.datasets[1] = {
    //label: symbol ? symbol : '',
    label:'low',
    data: loww,
    fill: false,
    backgroundColor: '#9CCC65',
    borderColor: '#673ab7',
  };*/this.Chart.refresh();
 }
  

}
