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
	{AssetTag: '1068', Asset: 'ZenBook UX310', Serial: '1cdd562b-2cd6-3494-a4f0-54b56bd64028', DepreciationName: 'Computer Depreciation',NumberofMonths:"36",CheckedOut:'Computer Depreciation',Purchased:'2018-07-08 00:00:00',EOL:'2019-07-08',Cost:'906.52',Value:'800'},
	{AssetTag: '814885612', Asset: 'iPhone 7', Serial: 'b56a33ed-b7ab-3241-a67d-acef21211e91', DepreciationName: 'Computer Depreciation',NumberofMonths:"12",CheckedOut:'Computer Depreciation',Purchased:'2018-07-08 00:00:00',EOL:'2019-07-08',Cost:'600.52',Value:'500'},
	{AssetTag: '24144621', Asset: 'iPhone 7', Serial: 'eec55068-088f-3780-9406-207e8b8c0932	', DepreciationName: 'Computer Depreciation',NumberofMonths:"36",CheckedOut:'Computer Depreciation',Purchased:'2018-07-08 00:00:00',EOL:'2019-07-08',Cost:'800.52',Value:'600'},
	{AssetTag: '849409914', Asset: 'iPhone 7', Serial: '1cdd562b-2cd6-3494-a4f0-54b56bd64028', DepreciationName: 'Computer Depreciation',NumberofMonths:"2",CheckedOut:'Computer Depreciation',Purchased:'2018-07-08 00:00:00',EOL:'2019-07-08',Cost:'906.52',Value:'400'},
	{AssetTag: '123325858', Asset: 'iPhone 7', Serial: 'b56a33ed-b7ab-3241-a67d-acef21211e91', DepreciationName: 'Computer Depreciation',NumberofMonths:"4",CheckedOut:'Computer Depreciation',Purchased:'2018-07-08 00:00:00',EOL:'2019-07-08',Cost:'600.52',Value:'300'},
	{AssetTag: '170689303', Asset: 'iPhone 7', Serial: 'eec55068-088f-3780-9406-207e8b8c0932	', DepreciationName: 'Computer Depreciation',NumberofMonths:"3",CheckedOut:'Computer Depreciation',Purchased:'2018-07-08 00:00:00',EOL:'2019-07-08',Cost:'906.52',Value:'500'},
	{AssetTag: '393255128', Asset: 'iPhone 7', Serial: '1cdd562b-2cd6-3494-a4f0-54b56bd64028', DepreciationName: 'Computer Depreciation',NumberofMonths:"12",CheckedOut:'Computer Depreciation',Purchased:'2018-07-08 00:00:00',EOL:'2019-07-08',Cost:'300.52',Value:'300'},
	{AssetTag: '4953983', Asset: 'iPhone 7', Serial: '1cdd562b-2cd6-3494-a4f0-54b56bd64028', DepreciationName: 'Computer Depreciation',NumberofMonths:"2",CheckedOut:'Computer Depreciation',Purchased:'2018-07-08 00:00:00',EOL:'2019-07-08',Cost:'600.52',Value:'400'},
	{AssetTag: '810872689', Asset: 'iPhone 7', Serial: '42c89223-95fc-3dc1-a118-006a417a2748', DepreciationName: 'Computer Depreciation',NumberofMonths:"33",CheckedOut:'Computer Depreciation',Purchased:'2018-07-08 00:00:00',EOL:'2019-07-08',Cost:'906.52',Value:'700'},
	{AssetTag: '147635057', Asset: 'iPhone 7', Serial: 'eec55068-088f-3780-9406-207e8b8c0932', DepreciationName: 'Computer Depreciation',NumberofMonths:"3",CheckedOut:'Computer Depreciation',Purchased:'2018-07-08 00:00:00',EOL:'2019-07-08',Cost:'700.52',Value:'400'},
	{AssetTag: '1016795388', Asset: 'iPhone 7', Serial: '42c89223-95fc-3dc1-a118-006a417a2748', DepreciationName: 'Computer Depreciation',NumberofMonths:"12",CheckedOut:'Computer Depreciation',Purchased:'2018-07-08 00:00:00',EOL:'2019-07-08',Cost:'906.52',Value:'805'},
	{AssetTag: '1121653949', Asset: 'iPhone 7', Serial: '1cdd562b-2cd6-3494-a4f0-54b56bd64028', DepreciationName: 'Computer Depreciation',NumberofMonths:"31",CheckedOut:'Computer Depreciation',Purchased:'2018-07-08 00:00:00',EOL:'2019-07-08',Cost:'500.52',Value:'400'},
	{AssetTag: '445391101', Asset: 'iPhone 7', Serial: '42c89223-95fc-3dc1-a118-006a417a2748', DepreciationName: 'Computer Depreciation',NumberofMonths:"21",CheckedOut:'Computer Depreciation',Purchased:'2018-07-08 00:00:00',EOL:'2019-07-08',Cost:'906.52',Value:'600'},
	{AssetTag: '285851209', Asset: 'iPhone 7', Serial: '1cdd562b-2cd6-3494-a4f0-54b56bd64028', DepreciationName: 'Computer Depreciation',NumberofMonths:"24",CheckedOut:'Computer Depreciation',Purchased:'2018-07-08 00:00:00',EOL:'2019-07-08',Cost:'540.52',Value:'450'},
	{AssetTag: '811767148', Asset: 'iPhone 7', Serial: 'eec55068-088f-3780-9406-207e8b8c0932	', DepreciationName: 'Computer Depreciation',NumberofMonths:"40",CheckedOut:'Computer Depreciation',Purchased:'2018-07-08 00:00:00',EOL:'2019-07-08',Cost:'532.52',Value:'450'},
	
];