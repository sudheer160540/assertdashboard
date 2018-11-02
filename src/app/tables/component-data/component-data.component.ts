import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-component-data',
  templateUrl: './component-data.component.html',
  styleUrls: ['./component-data.component.scss']
})
export class ComponentDataComponent implements OnInit {
  displayedColumns = ['Name', 'Serial', 'Category','Total','Remaining','Total','MinQTY','Location','OrderNumber','PurchaseDate','PurchaseCost'];
	dataSource = new MatTableDataSource(ELEMENT_DATA);
  	constructor() { }

  	ngOnInit() {
		//   this.dataSource = new ExampleDataSource(this.exampleDatabase);
		//   console.log(JSON.stringify(this.dataSource))
    }

}
export interface Element {

	Name: string;
  Serial: string;
  Category:string;
	Total: string;
	Remaining:string;
	MinQTY:string;
	Location:string;
	OrderNumber:string;
	PurchaseDate:string;
	PurchaseCost:string;

	
  }


const ELEMENT_DATA: Element[] =[
  {
    "Name":"Crucial BX300 240GB SATA Internal SSD",
    "Serial":"2d5-0aa1-3909-922c-8975",
    "Category":"HDD/SSD",
    "Total":"10",
    "Remaining":"10",
    "MinQTY":"2",
    "Location":"North Camilleburgh",
    "OrderNumber":"22787329",
    "PurchaseDate":"2010/10/21",
    "PurchaseCost":"7778693.25"
  },
  {
    "Name":"Crucial BX300 120GB SATA Internal SSD",
    "Serial":"41f4-81a2-3f64-9a5f-6b0b",
    "Category":"HDD/SSD",
    "Total":"10",
    "Remaining":"10",
    "MinQTY":"2",
    "Location":"North Camilleburgh",
    "OrderNumber":"8168195",
    "PurchaseDate":"2010/11/25",
    "PurchaseCost":"33.70"
  },
  {
    "Name":"Crucial 8GB DDR3L-1600 SODIMM Memory for Mac",
    "Serial":"2a-0fda-3afa-8d9a-6897",
    "Category":"RAM",
    "Total":"10",
    "Remaining":"10",
    "MinQTY":"2",
    "Location":"North Camilleburgh",
    "OrderNumber":"21318399",
    "PurchaseDate":"2010/4/24",
    "PurchaseCost":"1975.56"
  },
  {
    "Name":"Crucial 4GB DDR3L-1600 SODIMM",
    "Serial":"274-207d-35ef-b986-7ab9",
    "Category":"RAM",
    "Total":"10",
    "Remaining":"10",
    "MinQTY":"2",
    "Location":"New Devinview",
    "OrderNumber":"20766643",
    "PurchaseDate":"2010/1/22",
    "PurchaseCost":"706905.59"
  }
 ]