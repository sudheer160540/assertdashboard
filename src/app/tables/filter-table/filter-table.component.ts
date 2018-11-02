
import {fromEvent as observableFromEvent,  Observable } from 'rxjs';

import {distinctUntilChanged, debounceTime} from 'rxjs/operators';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ExampleDatabase, ExampleDataSource } from './helpers.data';
import {MatTableDataSource} from '@angular/material';
@Component({
  selector: 'cdk-filter-table',
  templateUrl: './filter-table.component.html',
  styleUrls: ['./filter-table.component.scss']
})
export class FilterTableComponent implements OnInit {

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
  
  const ELEMENT_DATA: Element[] = [
	{AssetName: 'L1', DeviceImage: 'https://demo.snipeitapp.com/uploads/models/mbp.jpg', AssetTag: '1069298670', Serial: '1a8d-3294-ade1-76e85fab5e14',Model:"Macbook Pro 13",Category:'Laptops',Status:'Ready to Deploy',CheckedOutTo:'Xzavier Simonis',Location:'Hyderabad',PurchaseCost:'35000'},
{AssetName: 'L1', DeviceImage: 'https://demo.snipeitapp.com/uploads/models/mbp.jpg', AssetTag: '1069298670', Serial: '1a8d-3294-ade1-76e85fab5e14',Model:"Macbook Pro 13",Category:'Laptops',Status:'Ready to Deploy',CheckedOutTo:'Xzavier Simonis',Location:'Hyderabad',PurchaseCost:'35000'},
  
{AssetName: 'L1', DeviceImage: 'https://demo.snipeitapp.com/uploads/models/mbp.jpg', AssetTag: '1069298670', Serial: '1a8d-3294-ade1-76e85fab5e14',Model:"Macbook Pro 13",Category:'Laptops',Status:'Ready to Deploy',CheckedOutTo:'Xzavier Simonis',Location:'Hyderabad',PurchaseCost:'35000'},
{AssetName: 'L1', DeviceImage: 'https://demo.snipeitapp.com/uploads/models/mbp.jpg', AssetTag: '1069298670', Serial: '1a8d-3294-ade1-76e85fab5e14',Model:"Macbook Pro 13",Category:'Laptops',Status:'Ready to Deploy',CheckedOutTo:'Xzavier Simonis',Location:'Hyderabad',PurchaseCost:'35000'},
{AssetName: 'L1', DeviceImage: 'https://demo.snipeitapp.com/uploads/models/mbp.jpg', AssetTag: '1069298670', Serial: '1a8d-3294-ade1-76e85fab5e14',Model:"Macbook Pro 13",Category:'Laptops',Status:'Ready to Deploy',CheckedOutTo:'Xzavier Simonis',Location:'Hyderabad',PurchaseCost:'35000'},
{AssetName: 'L1', DeviceImage: 'https://demo.snipeitapp.com/uploads/models/mbp.jpg', AssetTag: '1069298670', Serial: '1a8d-3294-ade1-76e85fab5e14',Model:"Macbook Pro 13",Category:'Laptops',Status:'Ready to Deploy',CheckedOutTo:'Xzavier Simonis',Location:'Hyderabad',PurchaseCost:'35000'},
{AssetName: 'L1', DeviceImage: 'https://demo.snipeitapp.com/uploads/models/mbp.jpg', AssetTag: '1069298670', Serial: '1a8d-3294-ade1-76e85fab5e14',Model:"Macbook Pro 13",Category:'Laptops',Status:'Ready to Deploy',CheckedOutTo:'Xzavier Simonis',Location:'Hyderabad',PurchaseCost:'35000'},
{AssetName: 'L1', DeviceImage: 'https://demo.snipeitapp.com/uploads/models/mbp.jpg', AssetTag: '1069298670', Serial: '1a8d-3294-ade1-76e85fab5e14',Model:"Macbook Pro 13",Category:'Laptops',Status:'Ready to Deploy',CheckedOutTo:'Xzavier Simonis',Location:'Hyderabad',PurchaseCost:'35000'},
{AssetName: 'L1', DeviceImage: 'https://demo.snipeitapp.com/uploads/models/mbp.jpg', AssetTag: '1069298670', Serial: '1a8d-3294-ade1-76e85fab5e14',Model:"Macbook Pro 13",Category:'Laptops',Status:'Ready to Deploy',CheckedOutTo:'Xzavier Simonis',Location:'Hyderabad',PurchaseCost:'35000'},
{AssetName: 'L1', DeviceImage: 'https://demo.snipeitapp.com/uploads/models/mbp.jpg', AssetTag: '1069298670', Serial: '1a8d-3294-ade1-76e85fab5e14',Model:"Macbook Pro 13",Category:'Laptops',Status:'Ready to Deploy',CheckedOutTo:'Xzavier Simonis',Location:'Hyderabad',PurchaseCost:'35000'},

];