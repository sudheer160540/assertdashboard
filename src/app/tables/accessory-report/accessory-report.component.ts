import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-accessory-report',
  templateUrl: './accessory-report.component.html',
  styleUrls: ['./accessory-report.component.scss']
})
export class AccessoryReportComponent implements OnInit {

  displayedColumns = ['Company', 'AccessoryName', 'Total', 'Avail'];
	dataSource = new MatTableDataSource(ELEMENT_DATA);
  	constructor() { }

  	ngOnInit() {
		//   this.dataSource = new ExampleDataSource(this.exampleDatabase);
		//   console.log(JSON.stringify(this.dataSource))
    }

}
export interface Element {
	Company: string;
	AccessoryName: string;
	Total: string;
	Avail: string;

	
  }
  
  const ELEMENT_DATA: Element[] = [
  {Company:'Yitsol',AccessoryName:'keyboard',Total:'23',Avail:'22'},
	{Company:'APS hardware',AccessoryName:'USB Keyboard',Total:'45',Avail:'35'},
	{Company:'SS hardware',AccessoryName:'Bluetooth Keyboard',Total:'30',Avail:'26'},
	{Company:'KML hardware',AccessoryName:'Magic Mouse',Total:'30',Avail:'20'},
	{Company:'TCS center',AccessoryName:'Sculpt Comfort Mouse',Total:'32',Avail:'26'},
	{Company:'MV hardware',AccessoryName:'Laptop',Total:'60',Avail:'50'},
	{Company:'RR pvt ltd',AccessoryName:'Desktop',Total:'40',Avail:'30'}
  
];