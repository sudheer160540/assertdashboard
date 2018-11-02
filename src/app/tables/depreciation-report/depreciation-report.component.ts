import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-depreciation-report',
  templateUrl: './depreciation-report.component.html',
  styleUrls: ['./depreciation-report.component.scss']
})
export class DepreciationReportComponent implements OnInit {

  displayedColumns = ['AssetTag', 'Asset', 'Serial', 'DepreciationName','NumberofMonths','CheckedOut','Purchased','EOL','Cost','Value'];
	dataSource = new MatTableDataSource(ELEMENT_DATA);
  	constructor() { }

  	ngOnInit() {
		//   this.dataSource = new ExampleDataSource(this.exampleDatabase);
		//   console.log(JSON.stringify(this.dataSource))
    }
}
export interface Element {
	AssetTag: string;
	Asset: string;
	Serial: string;
	DepreciationName: string;
	NumberofMonths:string;
	CheckedOut:string;
	Purchased:string;
	EOL:string;
	Cost:string;
	Value:string
	
  }
  
  const ELEMENT_DATA: Element[] = [
	{AssetTag: '1068', Asset: 'ZenBook UX310', Serial: '1cd-2cd6-3494-a4f0-5028', DepreciationName: 'Computer Depreciation',NumberofMonths:"36",CheckedOut:'Hankberg',Purchased:'2018-07-18',EOL:'2019-07-08',Cost:'906.52',Value:'800'},
	{AssetTag: '814885612', Asset: 'iPhone 7', Serial: 'b56d-b7ab-3241-a67d-a1e91', DepreciationName: 'Computer Depreciation',NumberofMonths:"12",CheckedOut:'Hankberg',Purchased:'2018-04-12',EOL:'2019-04-12',Cost:'600.52',Value:'500'},
	{AssetTag: '24144621', Asset: 'iPhone 7', Serial: 'eec5-088f-3780-9406-232	', DepreciationName: 'Computer Depreciation',NumberofMonths:"36",CheckedOut:'Nordea Office',Purchased:'2018-02-17',EOL:'2019-02-17',Cost:'800.52',Value:'600'},
	{AssetTag: '849409914', Asset: 'iPhone 7', Serial: '1cdd-2cd6-3494-a4f0-5428', DepreciationName: 'Computer Depreciation',NumberofMonths:"2",CheckedOut:'Edgar Gislason',Purchased:'2018-06-18',EOL:'2019-06-18',Cost:'906.52',Value:'400'},
	{AssetTag: '123325858', Asset: 'iPhone 7', Serial: 'b56-b7ab-3241-a67d-ac91', DepreciationName: 'Computer Depreciation',NumberofMonths:"4",CheckedOut:'Streichburgh',Purchased:'2018-07-21',EOL:'2019-07-21',Cost:'600.52',Value:'300'},
	{AssetTag: '170689303', Asset: 'iPhone 7', Serial: 'eec5-088f-3780-9406-932	', DepreciationName: 'Computer Depreciation',NumberofMonths:"3",CheckedOut:'Harveyfort',Purchased:'2018-08-11',EOL:'2019-08-11',Cost:'906.52',Value:'500'},
	{AssetTag: '393255128', Asset: 'iPhone 7', Serial: '1cd-2cd6-3494-a4f0-4028', DepreciationName: 'Computer Depreciation',NumberofMonths:"12",CheckedOut:'Admin User',Purchased:'2018-09-14',EOL:'2019-09-14',Cost:'300.52',Value:'300'},
	{AssetTag: '4953983', Asset: 'iPhone 7', Serial: '1cdd-2cd6-3494-a4f0-54028', DepreciationName: 'Computer Depreciation',NumberofMonths:"2",CheckedOut:'Xzavier Simonis',Purchased:'2018-01-18',EOL:'2019-01-18',Cost:'600.52',Value:'400'},
	{AssetTag: '810872689', Asset: 'iPhone 7', Serial: '423-95fc-3dc1-a118-0748', DepreciationName: 'Computer Depreciation',NumberofMonths:"33",CheckedOut:'New Devinview',Purchased:'2018-10-19',EOL:'2019-10-19',Cost:'906.52',Value:'700'},
	{AssetTag: '147635057', Asset: 'iPhone 7', Serial: 'eec-088f-3780-9406-232', DepreciationName: 'Computer Depreciation',NumberofMonths:"3",CheckedOut:'Harveyfort',Purchased:'2018-11-20',EOL:'2019-11-20',Cost:'700.52',Value:'400'},
	{AssetTag: '1016795388', Asset: 'iPhone 7', Serial: '42c8-95fc-3dc1-a118-2748', DepreciationName: 'Computer Depreciation',NumberofMonths:"12",CheckedOut:'Admin User',Purchased:'2018-12-21',EOL:'2019-12-21',Cost:'906.52',Value:'805'},
	{AssetTag: '1121653949', Asset: 'iPhone 7', Serial: '1cdd-2cd6-3494-a4f0-5028', DepreciationName: 'Computer Depreciation',NumberofMonths:"31",CheckedOut:'Admin User',Purchased:'2018-03-25',EOL:'2019-03-25',Cost:'500.52',Value:'400'},
	{AssetTag: '445391101', Asset: 'iPhone 7', Serial: '42-95fc-3dc1-a118-748', DepreciationName: 'Computer Depreciation',NumberofMonths:"21",CheckedOut:'Harveyfort',Purchased:'2018-08-25',EOL:'2019-08-25',Cost:'906.52',Value:'600'},
	{AssetTag: '285851209', Asset: 'iPhone 7', Serial: '1cdd-2cd6-3494-a4f0-4028', DepreciationName: 'Computer Depreciation',NumberofMonths:"24",CheckedOut:'Isaias Johns',Purchased:'2018-09-27',EOL:'2019-09-27',Cost:'540.52',Value:'450'},
	{AssetTag: '811767148', Asset: 'iPhone 7', Serial: 'ee-088f-3780-9406-232	', DepreciationName: 'Computer Depreciation',NumberofMonths:"40",CheckedOut:'Isaias Johns',Purchased:'2018-04-28',EOL:'2019-04-28',Cost:'532.52',Value:'450'},
	
];