import { Component, OnInit,ViewChild, Input ,SimpleChanges} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import { MdPaginator, MdSort } from '@angular/material';
import 'rxjs/add/observable/of';
import {BchartService} from '../services/bchart.service';
import { Chart } from "../structure/chart";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})


export class DataTableComponent  implements OnInit {
  @Input() symbol;
  @Input() chartInterval: string = '';

  ngOnChanges(changes: SimpleChanges) {
    if (changes.symbol.currentValue != null) this.exampleDatabase.getDataFromService(this.symbol,this.chartInterval);
    console.log(changes.symbol.currentValue);
  }

  displayedColumns = ['label','open', 'high', 'low', 'close'];
  exampleDatabase = new ExampleDatabase(this.bchartService);
  dataSource: ExampleDataSource | null;
  constructor(private bchartService:BchartService) { }
  @ViewChild(MdPaginator) paginator: MdPaginator;
  ngOnInit() {
    this.dataSource = new ExampleDataSource(this.exampleDatabase,this.paginator);
  }
}

/** An example database that the data source uses to retrieve data for the table. */
  export class ExampleDatabase {
   
    /** Stream that emits whenever the data has been modified. */
    dataChange: BehaviorSubject<Chart[]> = new BehaviorSubject<Chart[]>([]);
    get data(): Chart[] { return this.dataChange.value; }
    data1: Chart[];
    constructor(private bchartService:BchartService) {}
    
   /**Method that retrive data for the table through Service */
    getDataFromService(symb: string,inter:string) {
      this.bchartService.getchart(symb,inter).subscribe((p) => {
        this.data1 = p;
        this.data.length = 0;
  
        this.data1.forEach(element => {
          const Data2 = this.data.slice();
          Data2.push(element);
          this.dataChange.next(Data2);
        });
      });
    }

  ngOnInit() {
  }

}

export class ExampleDataSource extends DataSource<any> {
  constructor(private _exampleDatabase: ExampleDatabase,private _paginator: MdPaginator) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Chart[]> {
    const displayDataChanges = [
      this._exampleDatabase.dataChange,
      this._paginator.page,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      const data = this._exampleDatabase.data.slice();

      // Grab the page's slice of data.
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      return data.splice(startIndex, this._paginator.pageSize);
    });
  }

  disconnect() { }
}