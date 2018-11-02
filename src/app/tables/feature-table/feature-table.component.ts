
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