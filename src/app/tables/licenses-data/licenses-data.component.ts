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
  {
    "License": "Acrobat",
    "ProductKey": "ccfc28bb-00ed-3746-84d9-58a95e8acb19",
    "ExpirationDate": "",
    "LicensedtoEmail": "vince60@example.com",
    "LicensedtoName": "Vita Kozey",
    "Manufacturer": "Adobe",
    "Total": "10",
    "Avail": "9"
  },
 {
    "License": "gimp",
    "ProductKey": "68574198651496",
    "ExpirationDate": "",
    "LicensedtoEmail": "",
    "LicensedtoName": "",
    "Manufacturer": "Adobe",
    "Total": "1",
    "Avail": "1"
  },
 {
    "License": "InDesign",
    "ProductKey": "79286f4e-ab38-32a2-8425-51b354e4a4de",
    "ExpirationDate": "Fri Jul 05, 2019",
    "LicensedtoEmail": "dreichert@example.org",
    "LicensedtoName": "Gayle Jacobi",
    "Manufacturer": "Adobe",
    "Total": "10",
    "Avail": "10"
  },
 {
    "License": "IRISNext",
    "ProductKey": "123-12331-12312",
    "ExpirationDate": "Thu Nov 29, 2018",
    "LicensedtoEmail": "",
    "LicensedtoName": "IRISNext Full Access user",
    "Manufacturer": "IRIS P&T",
    "Total": "10",
    "Avail": "10"
  },
 {
    "License": "Office",
    "ProductKey": "58cce855-0ca0-3452-a1da-5902f171e581",
    "ExpirationDate": "Sat Jan 04, 2020",
    "LicensedtoEmail": "kling.judge@example.org",
    "LicensedtoName": "Anais Harvey",
    "Manufacturer": "Microsoft",
    "Total": "20",
    "Avail": "20"
  },
 {
    "License": "Office 365 E3",
    "ProductKey": "Per User / Cloud based",
    "ExpirationDate": "",
    "LicensedtoEmail": "",
    "LicensedtoName": "",
    "Manufacturer": "Microsoft",
    "Total": "50",
    "Avail": "48"
  }
 ]