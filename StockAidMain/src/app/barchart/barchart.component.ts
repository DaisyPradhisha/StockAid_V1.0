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
  @Input() chartInterval: string = '';
data1=new Array<Chart>();
label=new Array<any>();
highh=new Array<any>();
loww=new Array<any>();
close=new Array<any>();
test="";
  ngOnChanges(changes: SimpleChanges)
      {
    this.getValueFromChart(this.symbol,this.chartInterval);
        
     }
  hData = {
    labels: ['', '', '', '', ''],
    datasets: [
      {
      }
    ]
  }  
 constructor(private bchartService:BchartService) { }


getValueFromChart(sym : string, interval: string)
{
         this.bchartService.getchart(sym,interval).subscribe((r)=>
   {
    this.data1=r;
    Object.keys(this.data1).forEach(element => {
   
   this.label.push(this.data1[element].date);
   this.highh.push(this.data1[element].high);
   this.close.push(this.data1[element].close);
  // this.loww.push(this.data1[element].low);
  
  });console.log(this.data1);console.log(this.label);console.log(this.close);
  this.SetValuesAndUpdateChart(this.symbol, this.label, this.close);
}
)
 }
 SetValuesAndUpdateChart(symbol, label, close) {
  this.hData.labels = label;
  this.hData.datasets[0] = {
   
    label:'close',
    data: close,
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
