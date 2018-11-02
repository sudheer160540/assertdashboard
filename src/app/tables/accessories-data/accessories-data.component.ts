import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-accessories-data',
  templateUrl: './accessories-data.component.html',
  styleUrls: ['./accessories-data.component.scss']
})
export class AccessoriesDataComponent implements OnInit {

  displayedColumns = ['Name', 'AccessoryCategory', 'ModelNo','Manufacturer','Location','Total','MinQTY','Avail'];
	dataSource = new MatTableDataSource(ELEMENT_DATA);
  	constructor() { }

  	ngOnInit() {
		//   this.dataSource = new ExampleDataSource(this.exampleDatabase);
		//   console.log(JSON.stringify(this.dataSource))
    }
}
export interface Element {

	Name: string;
  AccessoryCategory: string;
  ModelNo:string;
	Manufacturer: string;
	Location:string;
	Total:string;
	MinQTY:string;
	Avail:string;

	
  }


const ELEMENT_DATA: Element[] =
  [
    {
      
      "Name":"Bluetooth Keyboard",
      "AccessoryCategory":"Keyboards",
      "ModelNo":"9026014",
      "Manufacturer":"Apple",
      "Location":"New Daija",
      "Total":"10",
      "MinQTY":"2",
      "Avail":"10"
      
     },
    {
     
      "Name":"Magic Mouse",
      "AccessoryCategory":"Mouse",
      "ModelNo":"42403456",
      "Manufacturer":"Apple",
      "Location":"New Daija",
      "Total":"13",
      "MinQTY":"2",
      "Avail":"13"
     },
    {
      
      "Name":"Sculpt Comfort Mouse",
      "AccessoryCategory":"Mouse",
      "ModelNo":"38309392",
      "Manufacturer":"Microsoft",
      "Location":"New Daija",
      "Total":"13",
      "MinQTY":"2",
      "Avail":"13"
     },
    {
      
      "Name":"USB Keyboard",
      "AccessoryCategory":"Keyboards",
      "ModelNo":"11173865",
      "Manufacturer":"Apple",
      "Location":"New Devinview",
      "Total":"15",
      "MinQTY":"2",
      "Avail":"14"
     }
   ]
  