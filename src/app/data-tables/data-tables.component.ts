import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: String;
  weight: string;
  symbol: string;
  target:string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 'Thu Nov 01, 2018 11:52PM', name: 'Admin User', weight: 'checkout', symbol: 'Acrobat',target:'Macbook Pro 13" (1400284932)'},
  {position: 'Thu Nov 01, 2018 12:52PM', name: 'Admin User', weight: 'Update', symbol: 'Acrobat',target:'Macbook Pro 13" (1400284932)'},
  {position: 'Fri Nov 02, 2018 11:52PM', name: 'Admin User', weight: 'checkout', symbol: 'Acrobat',target:'Macbook Pro 13" (1400284932)'},
  {position: 'Sat Nov 03, 2018 01:00PM', name: 'Admin User', weight: 'checkout', symbol: 'Acrobat',target:'Macbook Pro 13" (1400284932)'},
  {position: 'Sat Nov 03, 2018 01:00PM', name: 'Create New', weight: 'checkout', symbol: 'Acrobat',target:'Macbook Pro 13" (1400284932)'},
  {position: 'Sun Nov 04, 2018 10:57PM', name: 'Admin User', weight: 'Requested', symbol: 'Acrobat',target:'Macbook Pro 13" (1400284932)'},
  {position: 'Mon Nov 05, 2018 11:52PM', name: 'Admin User', weight: 'checkout', symbol: 'Acrobat',target:'Macbook Pro 13" (1400284932)'},
  {position: 'Thu Nov 09, 2018 11:52PM', name: 'Admin User', weight: 'Update', symbol: 'Acrobat',target:'Macbook Pro 13" (1400284932)'},
  {position: 'Mon Nov 05, 2018 11:52PM', name: 'Admin User', weight: 'Requested', symbol: 'Acrobat',target:'Macbook Pro 13" (1400284932)'},
  {position:'Mon Nov 05, 2018 02:52PM', name: 'Admin User', weight: 'checkout', symbol: 'Acrobat',target:'Macbook Pro 13" (1400284932)'},
  {position: 'Thu Nov 01, 2018 09:08PM', name: 'Admin User', weight: 'Requested', symbol: 'Acrobat',target:'Macbook Pro 13" (1400284932)'},
];

@Component({
  selector: 'app-data-tables',
  templateUrl: './data-tables.component.html',
  styleUrls: ['./data-tables.component.scss']
})
export class DataTablesComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','target'];
  dataSource = ELEMENT_DATA

  constructor() { }

  ngOnInit() {
  }

}
