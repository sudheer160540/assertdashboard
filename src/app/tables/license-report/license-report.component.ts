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
      ProductKey: 'f13-990-30-b8a-583',
      Seats: '10',
      RemainingSeats: '10',
      ExpirationDate:'2021-04-17',
      PurchaseDate:'2018-02-12',
      PurchaseCost:'299.99USD',
      Value:'299.99USD',
      Diff:'0USD'
          
      },
      {
        License: 'Acrobat',
        ProductKey: '28bb-00ed-374-84d9-5b9',
        Seats: '10',
        RemainingSeats: '7',
        ExpirationDate:'2021-03-14',
        PurchaseDate:'2019-04-02',
        PurchaseCost:'199.99USD',
        Value:'99.99USD',
        Diff:'100USD'
            
        },
        {
          License: 'InDesign',
          ProductKey: '792-ab8-322-845-513',
          Seats: '10',
          RemainingSeats: '5',
          ExpirationDate:'2021-02-25',
          PurchaseDate:'2018-02-12',
          PurchaseCost:'199.99USD',
          Value:'150.99USD',
          Diff:'49USD'
              
          }, {
            License: 'Office',
            ProductKey: '58c-0ca0-352-a1da-5581',
            Seats: '20',
            RemainingSeats: '3',
            ExpirationDate:'2021-06-25',
            PurchaseDate:'2018-04-25',
            PurchaseCost:'149.99USD',
            Value:'109.99USD',
            Diff:'40USD'
                
            }
];