import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-licenses-data',
  templateUrl: './licenses-data.component.html',
  styleUrls: ['./licenses-data.component.scss']
})
export class LicensesDataComponent implements OnInit {
	displayedColumns = ['License', 'ProductKey', 'ExpirationDate', 'LicensedtoEmail','LicensedtoName','Manufacturer','Total','Avail'];
	dataSource = new MatTableDataSource(ELEMENT_DATA);
  	constructor() { }

  	ngOnInit() {
		//   this.dataSource = new ExampleDataSource(this.exampleDatabase);
		//   console.log(JSON.stringify(this.dataSource))
    }

}
export interface Element {
	License: string;
	ProductKey: string;
	ExpirationDate: string;
	LicensedtoEmail: string;
	LicensedtoName:string;
	Manufacturer:string;
	Total:string;
	Avail:string;

	
  }


const ELEMENT_DATA: Element[] =[

  ]