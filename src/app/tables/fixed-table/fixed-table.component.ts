import { Component, OnInit , ElementRef, ViewChild} from '@angular/core';
import { ExampleDatabase, ExampleDataSource } from './helpers.data';
import { Observable } from 'rxjs';
import {MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-fixed-table',
  templateUrl: './fixed-table.component.html',
  styleUrls: ['./fixed-table.component.scss']
})
export class FixedTableComponent implements OnInit {
	// public displayedColumns = ['userId', 'userName', 'progress', 'color','model'];
	// public exampleDatabase = new ExampleDatabase();
	// public dataSource: ExampleDataSource | null;
	//   public showFilterTableCode;
	//   public assertData;
	displayedColumns = ['AssetName', 'DeviceImage', 'AssetTag', 'Serial','Model','Category','Status','CheckedOutTo','Location','PurchaseCost'];
	dataSource = new MatTableDataSource(ELEMENT_DATA);
  	constructor() { }

  	ngOnInit() {
		//   this.dataSource = new ExampleDataSource(this.exampleDatabase);
		//   console.log(JSON.stringify(this.dataSource))
    }

}
export interface Element {
	AssetName: string;
	DeviceImage: string;
	AssetTag: string;
	Serial: string;
	Model:string;
	Category:string;
	Status:string;
	CheckedOutTo:string;
	Location:string;
	PurchaseCost:string
	
  }


const ELEMENT_DATA: Element[] =[
	{
	  "AssetName": "L1",
	  "DeviceImage": "https://demo.snipeitapp.com/uploads/models/mbp.jpg",
	  "AssetTag": "20719607",
	  "Serial": "caff86bc-f82f-35a5-b15f-7948105e7bc4",
	  "Model": "Macbook Pro 13",
	  "Category": "Laptops",
	  "Status": " Ready to Deploy",
	  "CheckedOutTo": " Admin User",
	  "Location": "Lavadashire",
	  "PurchaseCost": "1567.79"
	},
	{
	  "AssetName": "L2",
	  "DeviceImage": "https://demo.snipeitapp.com/uploads/models/mbp.jpg",
	  "AssetTag": "1400284932",
	  "Serial": "a9fd5696-dd52-3e0b-bafc-c9d9bbd3a90f",
	  "Model": "Macbook Pro 13",
	  "Category": "Laptops",
	  "Status": "Ready to Deploy",
	  "CheckedOutTo": "Snipe E. Heads",
	  "Location": "New Devinview",
	  "PurchaseCost": "2398.01"
	},
	{
	  "AssetName": "L3",
	  "DeviceImage": "https://demo.snipeitapp.com/uploads/models/mbp.jpg",
	  "AssetTag": "798712069",
	  "Serial": "71975207-11ca-3a60-94e5-a516ffe81225",
	  "Model": "Macbook Pro 13",
	  "Category": "Laptops",
	  "Status": "Ready to Deploy",
	  "CheckedOutTo": "Edgar Gislason",
	  "Location": "Streichburgh",
	  "PurchaseCost": "1583.88"
	},
	{
	  "AssetName": "L4",
	  "DeviceImage": "https://demo.snipeitapp.com/uploads/models/mbp.jpg",
	  "AssetTag": "447773188",
	  "Serial": "e9fafae2-c44f-350d-8771-e3c9eb4aa4ed",
	  "Model": "Macbook Pro 13",
	  "Category": "Laptops",
	  "Status": "Ready to Deploy",
	  "CheckedOutTo": "Harveyfort",
	  "Location": "Harveyfort",
	  "PurchaseCost": "2257.48"
	},
	{
	  "AssetName": "L5",
	  "DeviceImage": "https://demo.snipeitapp.com/uploads/models/mbp.jpg",
	  "AssetTag": "1069298670",
	  "Serial": "ac944cf1-1a8d-3294-ade1-76e85fab5e14",
	  "Model": "Macbook Pro 13",
	  "Category": "Laptops",
	  "Status": "Ready to Deploy",
	  "CheckedOutTo": "Xzavier Simonis",
	  "Location": "New Devinview",
	  "PurchaseCost": "1173.51"
	},
	{
	  "AssetName": "L6",
	  "DeviceImage": "https://demo.snipeitapp.com/uploads/models/mbp.jpg",
	  "AssetTag": "803479847",
	  "Serial": "865fe20e-1e8d-30f1-8be2-ef7f3862a714",
	  "Model": "Macbook Pro 13",
	  "Category": "Laptops",
	  "Status": "Ready to Deploy",
	  "CheckedOutTo": "Admin User",
	  "Location": "Lavadashire",
	  "PurchaseCost": "1509.58"
	},
	{
	  "AssetName": "L7",
	  "DeviceImage": "https://demo.snipeitapp.com/uploads/models/mbp.jpg",
	  "AssetTag": "881074679",
	  "Serial": "4b2dca3b-4117-3a1a-a889-1c5d112a7926",
	  "Model": "Macbook Pro 13",
	  "Category": "Laptops",
	  "Status": "Ready to Deploy",
	  "CheckedOutTo": "Edgar Gislason",
	  "Location": "Streichburgh",
	  "PurchaseCost": "559.57"
	},
	{
	   "AssetName": "L8",
	  "DeviceImage": "https://demo.snipeitapp.com/uploads/models/mbp.jpg",
	  "AssetTag": "263102074",
	  "Serial": "666a6c95-a21a-37d2-8d65-368673f0e673",
	  "Model": "Macbook Pro 13",
	  "Category": "Laptops",
	  "Status": "Ready to Deploy",
	  "CheckedOutTo": "Xzavier Simonis",
	  "Location": "New Devinview",
	  "PurchaseCost": "1886.35"
	},
	{
	   "AssetName": "L9",
	  "DeviceImage": "https://demo.snipeitapp.com/uploads/models/mbp.jpg",
	  "AssetTag": "1052097558",
	  "Serial": "b78b6fe6-6be2-38cc-b917-7b0b15592e42",
	  "Model": "Macbook Pro 13",
	  "Category": "Laptops",
	  "Status": "Ready to Deploy",
	  "CheckedOutTo": " Xzavier Simonis",
	  "Location": "New Devinview",
	  "PurchaseCost": "1816.24"
	},
	{
	   "AssetName": "L10",
	  "DeviceImage": "https://demo.snipeitapp.com/uploads/models/mbp.jpg",
	  "AssetTag": "153290037",
	  "Serial": "29b0fbf5-bbe6-31f3-a14b-730672480e1a",
	  "Model": "Macbook Pro 13",
	  "Category": "Laptops",
	  "Status": "Ready to Deploy",
	  "CheckedOutTo": "Streichburgh",
	  "Location": "Streichburgh",
	  "PurchaseCost": "2357.40"
	}
	
  ]
  
  