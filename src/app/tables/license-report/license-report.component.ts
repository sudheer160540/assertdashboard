import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-license-report',
  templateUrl: './license-report.component.html',
  styleUrls: ['./license-report.component.scss']
})
export class LicenseReportComponent implements OnInit {

  displayedColumns = ['License', 'ProductKey','Seats', 'RemainingSeats','ExpirationDate','PurchaseDate','PurchaseCost','Value','Diff'];
	dataSource = new MatTableDataSource(ELEMENT_DATA);
  	constructor() { }

  	ngOnInit() {
		//   this.dataSource = new ExampleDataSource(this.exampleDatabase);
		//   console.log(JSON.stringify(this.dataSource))
    }
}
export interface Element {
	License: string;
	ProductKey: string;
	Seats: string;
	RemainingSeats: string;
	ExpirationDate:string;
	PurchaseDate:string;
	PurchaseCost:string;
	Value:string;
	Diff:string;
	
	
  }
  
  const ELEMENT_DATA: Element[] = [
    {
      License: 'Photoshop',
      ProductKey: 'f13c9bb0-99a0-30a9-b8ae-616d2ed5830c',
      Seats: '10',
      RemainingSeats: '10',
      ExpirationDate:'2021-03-25 00:00:00',
      PurchaseDate:'2018-02-12 00:00:00',
      PurchaseCost:'299.99',
      Value:'299.99',
      Diff:'0'
          
      },
      {
        License: 'Acrobat',
        ProductKey: 'ccfc28bb-00ed-3746-84d9-58a95e8acb19',
        Seats: '10',
        RemainingSeats: '7',
        ExpirationDate:'2021-03-25 00:00:00',
        PurchaseDate:'2018-02-12 00:00:00',
        PurchaseCost:'99.99',
        Value:'99.99',
        Diff:'0'
            
        },
        {
          License: 'InDesign',
          ProductKey: '79286f4e-ab38-32a2-8425-51b354e4a4de',
          Seats: '10',
          RemainingSeats: '5',
          ExpirationDate:'2021-03-25 00:00:00',
          PurchaseDate:'2018-02-12 00:00:00',
          PurchaseCost:'199.99',
          Value:'199.99',
          Diff:'0'
              
          }, {
            License: 'Office',
            ProductKey: '58cce855-0ca0-3452-a1da-5902f171e581',
            Seats: '20',
            RemainingSeats: '3',
            ExpirationDate:'2021-03-25 00:00:00',
            PurchaseDate:'2018-02-12 00:00:00',
            PurchaseCost:'49.99',
            Value:'49.99',
            Diff:'0'
                
            }
];