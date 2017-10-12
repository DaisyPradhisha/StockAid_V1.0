import { Injectable } from '@angular/core';
import {MdSidenav} from "@angular/material";
@Injectable()
export class SidenavService {
  private sidenav: MdSidenav;
  public setSidenav(sidenav: MdSidenav) {
    this.sidenav = sidenav;
  }

  public openside():Promise<any> {
    return this.sidenav.open();
  }
  constructor() { }

}
