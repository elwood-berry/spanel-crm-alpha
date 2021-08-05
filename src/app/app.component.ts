/*
SLIDING PANEL | CRM v.alpha
Author: 'me@elwoodberry.com'
This code is brought to you by Elwood Berry @www.elwoodberry.com 
*/

import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

// INTERFACE
export interface PeriodicElement {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;

  // ---
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

//
const ELEMENT_DATA: PeriodicElement[] = [
  {
    firstName: 'Al',
    lastName: 'Pacino',
    email: 'email@gmail.com',
    phone: '(000) 000-0000',
    position: 1,
    name: 'Hydrogen',
    weight: 1.0079,
    symbol: 'H'
  },
  {
    firstName: 'Tony',
    lastName: 'Montana',
    email: 'email@gmail.com',
    phone: '(000) 000-0000',
    position: 2,
    name: 'Helium',
    weight: 4.0026,
    symbol: 'He'
  },
  {
    firstName: 'Michelle',
    lastName: 'Pfeiffer',
    email: 'email@gmail.com',
    phone: '(000) 000-0000',
    position: 3,
    name: 'Lithium',
    weight: 6.941,
    symbol: 'Li'
  },
  {
    firstName: 'Elvira',
    lastName: 'Jones',
    email: 'email@gmail.com',
    phone: '(000) 000-0000',
    position: 4,
    name: 'Beryllium',
    weight: 9.0122,
    symbol: 'Be'
  },
  {
    firstName: 'Steven',
    lastName: 'Bauer',
    email: 'email@gmail.com',
    phone: '(000) 000-0000',
    position: 5,
    name: 'Boron',
    weight: 10.811,
    symbol: 'B'
  },
  {
    firstName: 'Manny',
    lastName: 'Ribera',
    email: 'email@gmail.com',
    phone: '(000) 000-0000',
    position: 6,
    name: 'Carbon',
    weight: 12.0107,
    symbol: 'C'
  },
  {
    firstName: 'Mary',
    lastName: 'Mastrantonio',
    email: 'email@gmail.com',
    phone: '(000) 000-0000',
    position: 7,
    name: 'Nitrogen',
    weight: 14.0067,
    symbol: 'N'
  },
  {
    firstName: 'Gina',
    lastName: 'Lewis',
    email: 'email@gmail.com',
    phone: '(000) 000-0000',
    position: 8,
    name: 'Oxygen',
    weight: 15.9994,
    symbol: 'O'
  },
  {
    firstName: 'Robert',
    lastName: 'Last Name',
    email: 'email@gmail.com',
    phone: '(000) 000-0000',
    position: 9,
    name: 'Fluorine',
    weight: 18.9984,
    symbol: 'F'
  },
  {
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'email@gmail.com',
    phone: '(000) 000-0000',
    position: 10,
    name: 'Neon',
    weight: 20.1797,
    symbol: 'Ne'
  }
];

//
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // PROPERTIES
  // public displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  public displayedColumns: string[] = ['position'];
  public dataSource = new MatTableDataSource(ELEMENT_DATA);

  //
  applyFilter(event: Event) {
    //
    const filterValue = (event.target as HTMLInputElement).value;

    //
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // SHOW DETAILS
  public showDetails(data) {
    console.log('You have clicked on Me....', data);
  }
}

/*
-------------------------------------------------
Copyright 2021 ElwoodBerry.com LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at http://www.elwoodberry.com 

*/
