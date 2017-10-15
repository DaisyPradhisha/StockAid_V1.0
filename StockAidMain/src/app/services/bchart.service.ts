
import { Input} from '@angular/core';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { Chart } from "../structure/chart";

@Injectable()
export class BchartService {
  constructor(private http:Http) { }

    getchart(sym:string,interval:string){
      console.log(sym);
      console.log(interval);
              return this.http.get('https://api.iextrading.com/1.0/stock/'+sym+'/chart/'+interval).map(res=>res.json());
         }
         getchartSlowly(): Promise<any> {
          return new Promise(resolve => {
                    setTimeout(() => resolve(this.getchart('','')), 1000);
      });
    }


}