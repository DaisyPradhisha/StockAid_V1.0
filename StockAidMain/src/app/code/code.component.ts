import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class AutocompleteSimpleExample {
  
    myControl: FormControl = new FormControl();
  
    options = [
      'Google',
      'Apple',
      'IBM'
     ];
  
  }
