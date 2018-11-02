
import {fromEvent as observableFromEvent,  Observable } from 'rxjs';

import {distinctUntilChanged, debounceTime} from 'rxjs/operators';
import { Component, OnInit , ElementRef, ViewChild} from '@angular/core';
import { TABLE_HELPERS, ExampleDatabase, ExampleDataSource } from './helpers.data';
import { MatPaginator, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material';
@Component({
  selector: 'cdk-feature-table',
  templateUrl: './feature-table.component.html',
  styleUrls: ['./feature-table.component.scss']
})
export class FeatureTableComponent implements OnInit {

	// showNavListCode;
	// displayedColumns = ['select', 'userId', 'userName', 'progress', 'color'];
	// exampleDatabase = new ExampleDatabase();
	// selection = new SelectionModel<string>(true, []);
	// dataSource: ExampleDataSource | null;
	// allfeatures = TABLE_HELPERS;
	// constructor() { }
	// @ViewChild(MatPaginator) paginator: MatPaginator;
	// @ViewChild(MatSort) sort: MatSort;
	// @ViewChild('filter') filter: ElementRef;

	// ngOnInit() {
	//     this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
	//     observableFromEvent(this.filter.nativeElement, 'keyup').pipe(
	//         debounceTime(150),
	//         distinctUntilChanged(),)
	//         .subscribe(() => {
	//           if (!this.dataSource) { return; }
	//           this.dataSource.filter = this.filter.nativeElement.value;
	//         });
	// }

	// isAllSelected(): boolean {
	//     if (!this.dataSource) { return false; }
	//     if (this.selection.isEmpty()) { return false; }

	//     if (this.filter.nativeElement.value) {
	//       return this.selection.selected.length == this.dataSource.renderedData.length;
	//     } else {
	//       return this.selection.selected.length == this.exampleDatabase.data.length;
	//     }
	// }

	// masterToggle() {
	//     if (!this.dataSource) { return; }

	//     if (this.isAllSelected()) {
	//       this.selection.clear();
	//     } else if (this.filter.nativeElement.value) {
	//       this.dataSource.renderedData.forEach(data => this.selection.select(data.id));
	//     } else {
	//       this.exampleDatabase.data.forEach(data => this.selection.select(data.id));
	//     }
	// }

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
  
//   const ELEMENT_DATA: Element[] = [
// 	{AssetName: 'L1', DeviceImage: 'https://demo.snipeitapp.com/uploads/models/mbp.jpg', AssetTag: '1069298670', Serial: '1a8d-3294-ade1-76e85fab5e14',Model:"Macbook Pro 13",Category:'Laptops',Status:'Ready to Deploy',CheckedOutTo:'Xzavier Simonis',Location:'Hyderabad',PurchaseCost:'35000'},
// {AssetName: 'L1', DeviceImage: 'https://demo.snipeitapp.com/uploads/models/mbp.jpg', AssetTag: '1069298670', Serial: '1a8d-3294-ade1-76e85fab5e14',Model:"Macbook Pro 13",Category:'Laptops',Status:'Ready to Deploy',CheckedOutTo:'Xzavier Simonis',Location:'Hyderabad',PurchaseCost:'35000'},
  
// {AssetName: 'L1', DeviceImage: 'https://demo.snipeitapp.com/uploads/models/mbp.jpg', AssetTag: '1069298670', Serial: '1a8d-3294-ade1-76e85fab5e14',Model:"Macbook Pro 13",Category:'Laptops',Status:'Ready to Deploy',CheckedOutTo:'Xzavier Simonis',Location:'Hyderabad',PurchaseCost:'35000'},
// {AssetName: 'L1', DeviceImage: 'https://demo.snipeitapp.com/uploads/models/mbp.jpg', AssetTag: '1069298670', Serial: '1a8d-3294-ade1-76e85fab5e14',Model:"Macbook Pro 13",Category:'Laptops',Status:'Ready to Deploy',CheckedOutTo:'Xzavier Simonis',Location:'Hyderabad',PurchaseCost:'35000'},
// {AssetName: 'L1', DeviceImage: 'https://demo.snipeitapp.com/uploads/models/mbp.jpg', AssetTag: '1069298670', Serial: '1a8d-3294-ade1-76e85fab5e14',Model:"Macbook Pro 13",Category:'Laptops',Status:'Ready to Deploy',CheckedOutTo:'Xzavier Simonis',Location:'Hyderabad',PurchaseCost:'35000'},
// {AssetName: 'L1', DeviceImage: 'https://demo.snipeitapp.com/uploads/models/mbp.jpg', AssetTag: '1069298670', Serial: '1a8d-3294-ade1-76e85fab5e14',Model:"Macbook Pro 13",Category:'Laptops',Status:'Ready to Deploy',CheckedOutTo:'Xzavier Simonis',Location:'Hyderabad',PurchaseCost:'35000'},
// {AssetName: 'L1', DeviceImage: 'https://demo.snipeitapp.com/uploads/models/mbp.jpg', AssetTag: '1069298670', Serial: '1a8d-3294-ade1-76e85fab5e14',Model:"Macbook Pro 13",Category:'Laptops',Status:'Ready to Deploy',CheckedOutTo:'Xzavier Simonis',Location:'Hyderabad',PurchaseCost:'35000'},
// {AssetName: 'L1', DeviceImage: 'https://demo.snipeitapp.com/uploads/models/mbp.jpg', AssetTag: '1069298670', Serial: '1a8d-3294-ade1-76e85fab5e14',Model:"Macbook Pro 13",Category:'Laptops',Status:'Ready to Deploy',CheckedOutTo:'Xzavier Simonis',Location:'Hyderabad',PurchaseCost:'35000'},
// {AssetName: 'L1', DeviceImage: 'https://demo.snipeitapp.com/uploads/models/mbp.jpg', AssetTag: '1069298670', Serial: '1a8d-3294-ade1-76e85fab5e14',Model:"Macbook Pro 13",Category:'Laptops',Status:'Ready to Deploy',CheckedOutTo:'Xzavier Simonis',Location:'Hyderabad',PurchaseCost:'35000'},
// {AssetName: 'L1', DeviceImage: 'https://demo.snipeitapp.com/uploads/models/mbp.jpg', AssetTag: '1069298670', Serial: '1a8d-3294-ade1-76e85fab5e14',Model:"Macbook Pro 13",Category:'Laptops',Status:'Ready to Deploy',CheckedOutTo:'Xzavier Simonis',Location:'Hyderabad',PurchaseCost:'35000'},

// ];
const ELEMENT_DATA: Element[] =
[{"AssetName": "L1", "DeviceImage": "https://demo.snipeitapp.com/uploads/models/mbp.jpg", "AssetTag": "1070574621", "Serial": "6a7fd3d7-8e68-3136-85a1-f402753860da","Model":"Macbook Pro 13","Category":"Laptops","Status":"Ready to Deploy","CheckedOutTo":"Xzavier Simonis","Location":"East Kelly","PurchaseCost":"2225.45"},

{"AssetName": "L2", "DeviceImage": "https://demo.snipeitapp.com/uploads/models/mbp.jpg", "AssetTag": "343921742", "Serial": "5f069ac3-7d6a-3815-aa36-a956428b2a79","Model":"Macbook Pro 13","Category":"Laptops","Status":"Ready to Deploy","CheckedOutTo":"Xzavier Simonis","Location":"Lavadashire","PurchaseCost":"2444.56"},

{"AssetName": "L3", "DeviceImage": "https://demo.snipeitapp.com/uploads/models/mbp.jpg", "AssetTag": "589963085", "Serial": "5deb7cdc-14ce-3e56-ba8d-087cee02ff51","Model":"Macbook Pro 13","Category":"Laptops","Status":"Ready to Deploy","CheckedOutTo":"Xzavier Simonis","Location":"Streichburgh","PurchaseCost":"1289.79"},

{"AssetName": "L4", "DeviceImage": "https://demo.snipeitapp.com/uploads/models/mbp.jpg", "AssetTag": "1372691602", "Serial": "5deb7cdc-14ce-3e56-ba8d-087cee02ff51","Model":"Macbook Pro 13","Category":"Laptops","Status":"Ready to Deploy","CheckedOutTo":"Xzavier Simonis","Location":"East Kelly","PurchaseCost":"2504.91"},

{"AssetName": "L5", "DeviceImage": "https://demo.snipeitapp.com/uploads/models/mbp.jpg", "AssetTag": "264481046", "Serial": "e33a80f9-0dde-3a2b-a987-0ae1cb26ad3d","Model":"Macbook Pro 13","Category":"Laptops","Status":"Ready to Deploy","CheckedOutTo":"Xzavier Simonis","Location":"East Kelly","PurchaseCost":"2014.56"},

{"AssetName": "L6", "DeviceImage": "https://demo.snipeitapp.com/uploads/models/mbp.jpg", "AssetTag": "1383701294", "Serial": "e903ccf2-33b7-3018-8d50 35bd7abbd73a","Model":"Macbook Pro 13","Category":"Laptops","Status":"Ready to Deploy","CheckedOutTo":"Xzavier Simonis","Location":"North Antwan","PurchaseCost":"2028.49"},

{"AssetName": "L7", "DeviceImage": "https://demo.snipeitapp.com/uploads/models/mbp.jpg", "AssetTag": "610058983", "Serial": "e15b9c70-6ccf-3c72-8d70-2cdccf09d75d","Model":"Macbook Pro 13","Category":"Laptops","Status":"Ready to Deploy","CheckedOutTo":"East Kelly","Location":"North Antwan","PurchaseCost":"883.84"},


{"AssetName": "L8", "DeviceImage": "https://demo.snipeitapp.com/uploads/models/mbp.jpg", "AssetTag": "1269558446", "Serial": "3924238e-7fa5-38de-b0e1-bfab4d408dcc","Model":"Macbook Pro 13","Category":"Laptops","Status":"Ready to Deploy","CheckedOutTo":"North Antwan","Location":"North Antwan","PurchaseCost":"2825.98"},

{"AssetName": "L9", "DeviceImage": "https://demo.snipeitapp.com/uploads/models/mbp.jpg", "AssetTag": "807795676", "Serial": "54fd051a-b830-3cce-aeb2-7f0c69991180","Model":"Macbook Pro 13","Category":"Laptops","Status":"Ready to Deploy","CheckedOutTo":"North Antwan","Location":"Streichburgh","PurchaseCost":"469.57"},

{"AssetName": "L10", "DeviceImage": "https://demo.snipeitapp.com/uploads/models/mbp.jpg", "AssetTag": "342806631", "Serial": "5cc4b8c2-ede0-3aeb-8c2a-7a96d5df9ff0","Model":"Macbook Pro 13","Category":"Laptops","Status":"Ready to Deploy","CheckedOutTo":"North Antwan","Location":"New Devinview","PurchaseCost":"1481.12"}

]