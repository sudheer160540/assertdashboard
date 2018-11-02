import { Component, OnInit, ViewEncapsulation, Input,Output,EventEmitter, ViewChild } from '@angular/core';
import { ResponsiveTableHelpers } from './helpers.data';
import { MatPaginator } from '@angular/material';
import {MatTableDataSource} from '@angular/material';
@Component({
  selector: 'cdk-responsive-table',
  templateUrl: './responsive-table.component.html',
  styleUrls: ['./responsive-table.component.scss']
})
export class ResponsiveTableComponent implements OnInit {

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
	"AssetName":"L1",
	"DeviceImage":"https://demo.snipeitapp.com/uploads/models/mbp.jpg",
	"AssetTag":"214943924",
	"Serial":"921575ae-9c98-3d31-984a-cf9eff05cf0e",
	"Model":"Macbook Pro 13",
	"Category":"Laptops",
	"Status":"Pending	",
	"CheckedOutTo":"",
	"Location":"Harveyfort",
	"PurchaseCost":"2921.76"
	},
	{
	"AssetName":"L1",
	"DeviceImage":"https://demo.snipeitapp.com/uploads/models/mbp.jpg",
	"AssetTag":"	395899386",
	"Serial":"1b2360db-1e6c-33db-a8b7-afe150085444",
	"Model":"Macbook Pro 13",
	"Category":"Laptops",
	"Status":"Pending	",
	"CheckedOutTo":"",
	"Location":"North Camilleburgh",
	"PurchaseCost":"2433.14"
	},
	{
	"AssetName":"L1",
	"DeviceImage":"https://demo.snipeitapp.com/uploads/models/mbp.jpg",
	"AssetTag":"719972992",
	"Serial":"1fef367b-16d2-3c60-a7c0-dab431d56c4e",
	"Model":"Macbook Pro 13",
	"Category":"Laptops",
	"Status":"Pending",
	"CheckedOutTo":"",
	"Location":"Lavadashire",
	"PurchaseCost":"1213.09"
	},
	{
	"AssetName":"L1",
	"DeviceImage":"https://demo.snipeitapp.com/uploads/models/mbp.jpg",
	"AssetTag":"1240404287",
	"Serial":"bfb9d988-f228-3ba6-afa0-47705a538117",
	"Model":"Macbook Pro 13",
	"Category":"Laptops",
	"Status":"Pending	",
	"CheckedOutTo":"",
	"Location":"East Kelly",
	"PurchaseCost":"1470.09"
	},
	{
	"AssetName":"L1",
	"DeviceImage":"https://demo.snipeitapp.com/uploads/models/mbp.jpg",
	"AssetTag":"356019862",
	"Serial":"b06dfeca-5c8f-32ad-91c4-476093322181",
	"Model":"Macbook Pro 13",
	"Category":"Laptops",
	"Status":"Pending",
	"CheckedOutTo":"",
	"Location":"North Camilleburgh",
	"PurchaseCost":"2069.98"
	},
	{
	"AssetName":"L1",
	"DeviceImage":"https://demo.snipeitapp.com/uploads/models/mbp.jpg",
	"AssetTag":"	1386529584",
	"Serial":"1e13c6cb-59e1-39bd-be51-a95053ef38ab",
	"Model":"Macbook Pro 13",
	"Category":"Laptops",
	"Status":"Pending	",
	"CheckedOutTo":"",
	"Location":"New Daija",
	"PurchaseCost":"2709.57"
	},
	{
	"AssetName":"L1",
	"DeviceImage":"https://demo.snipeitapp.com/uploads/models/mbp.jpg",
	"AssetTag":"580470713",
	"Serial":"33f05f37-c6fa-30ef-9a71-a41779e782fb4",
	"Model":"Macbook Pro 13",
	"Category":"Laptops",
	"Status":"Pending	",
	"CheckedOutTo":"",
	"Location":"Hyderabad",
	"PurchaseCost":"403.78"
	}
	]
