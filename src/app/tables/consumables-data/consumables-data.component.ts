import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-consumables-data',
  templateUrl: './consumables-data.component.html',
  styleUrls: ['./consumables-data.component.scss']
})
export class ConsumablesDataComponent implements OnInit {

  displayedColumns = ['Name', 'Category', 'ModelNo','ItemNo','Remaining','Total','MinQTY','Location','OrderNumber','PurchaseDate','PurchaseCost'];
	dataSource = new MatTableDataSource(ELEMENT_DATA);
  	constructor() { }

  	ngOnInit() {
		//   this.dataSource = new ExampleDataSource(this.exampleDatabase);
		//   console.log(JSON.stringify(this.dataSource))
    }

}
export interface Element {

	Name: string;
  Category: string;
  ModelNo:string;
  ItemNo:string;
  Remaining:string;
	Total:string;
  MinQTY:string;
  Location:string;
 
  OrderNumber:string;
  PurchaseDate:string;
	PurchaseCost:string;
  }


const ELEMENT_DATA: Element[] =[
  {
    "Name":"Laserjet Toner (black)",
    "Category":"Printer Ink",
    "ModelNo":"9494160540",
    "ItemNo":"9686856",
    "Total":"20",
    "Remaining":"20",
    "MinQTY":"2",
    "Location":"sds",
    "OrderNumber":"2854704",
    "PurchaseDate":"Fri Mar 16, 2018",
    "PurchaseCost":"36.86"
  },
  {
    "Name":"Laserjet Paper (Ream)",
    "Category":"Printer Paper",
    "ModelNo":"",
    "ItemNo":"8580748",
    "Total":"20",
    "Remaining":"20",
    "MinQTY":"2",
    "Location":"",
    "OrderNumber":"42853408",
    "PurchaseDate":"Fri Mar 23, 2018",
    "PurchaseCost":"24.57"
  },
  {
    "Name":"Cardstock (White)",
    "Category":"Printer Paper",
    "ModelNo":"",
    "ItemNo":"29921850",
    "Total":"10",
    "Remaining":"10",
    "MinQTY":"2",
    "Location":"",
    "OrderNumber":"40172142",
    "PurchaseDate":"Sat Jun 23, 2018",
    "PurchaseCost":"17.37"
  },
  {
    "Name":"5k resistors",
    "Category":"Electronics - Resistors",
    "ModelNo":"",
    "ItemNo":"",
    "Total":"5",
    "Remaining":"5",
    "MinQTY":"10",
    "Location":"Harveyfort",
    "OrderNumber":"",
    "PurchaseDate":"",
    "PurchaseCost":""
  }
 ]
 
 
 
 