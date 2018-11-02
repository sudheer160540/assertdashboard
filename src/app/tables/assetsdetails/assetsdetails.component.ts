import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;

  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Status', symbol: 'Ready to Deploy Deployed   Edgar Gislason' },
  { name: 'Serial', symbol: '4b2dca3b-4117-3a1a-a889-1c5d112a7926' },
  { name: 'Manufacturer', symbol: 'Li' },
  { name: 'Category', symbol: 'Laptops' },
  { name: 'Model', symbol: 'Macbook Pro 13' },
  { name: 'Model No.', symbol: '2359928557772964' },
  { name: 'Purchase Date', symbol: 'Mon Oct 15, 2018' },
  { name: 'Purchase Cost', symbol: 'JOD 559.57' },
  { name: 'Order Number', symbol: '#37759107' },
  { name: 'Supplier', symbol: 'Hermiston, Steuber and Block' },
  { name: 'Depreciation', symbol: 'Computer Depreciation (36 months )' },
  { name: 'Fully Depreciated', symbol: '2 years, 11 months (2021-10-15)' },
  { name: 'EOL Rate', symbol: '36 months ( EOL Date: 2021-10-15 ( 2 years, 11 months )F' },
  { name: 'Notes', symbol: 'Created by DB seeder' },
  { name: 'Location', symbol: 'Streichburgh' },
  { name: 'Defualt Location', symbol: 'Streichburgh'},
  { name: 'Created at', symbol: 'Thu Nov 01, 2018 9:00PM' },
  { name: 'Updated at', symbol: 'Thu Nov 01, 2018 9:00PM' },
  { name: 'Ceckouts', symbol: '1' },
  { name: 'Checkins', symbol: '0' },
  { name: 'Requests', symbol: '0' },
];

@Component({
  selector: 'app-assetsdetails',
  templateUrl: './assetsdetails.component.html',
  styleUrls: ['./assetsdetails.component.scss']
})
export class AssetsdetailsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'symbol'];
  dataSource = ELEMENT_DATA;
  displayedColumns1: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource1 = ELEMENT_DATA1;
  constructor() { }

  ngOnInit() {

  }

}
