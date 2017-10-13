import { Component } from '@angular/core';
import {SidenavService} from './services/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   constructor(private sidenavService: SidenavService) {
  }

  ngOnInit(): void {
    
      }

  public toggleSidenav() {
    this.sidenavService
      .openside();
  } 
 
}
