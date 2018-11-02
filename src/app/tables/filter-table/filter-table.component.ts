
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

	displayedColumns = ['Name', 'Title', 'Email', 'Phone','Username','Department','Location','Manager','Notes','Status'];
	dataSource = new MatTableDataSource(ELEMENT_DATA);
  	constructor() { }

  	ngOnInit() {
		//   this.dataSource = new ExampleDataSource(this.exampleDatabase);
		//   console.log(JSON.stringify(this.dataSource))
    }

}
export interface Element {
	Name: string;
	Title: string;
	Email: string;
	Phone: string;
	Username:string;
	Department:string;
	Location:string;
	Manager:string;
	Notes:string;
	Status:string
	
  }
  
  const ELEMENT_DATA: Element[] = [
	{Name: 'Ramu', Title: 'Production Laborer', Email: 'kutch.herta@gmail.com', Phone: '+919349999334',Username:"Ramu",Department:'Laborer',Location:'Hyderabad',Manager:'admin',Notes:'Created by DB seeder',Status:'Active'},
	{Name: 'Raju', Title: 'Office Clerk', Email: 'raju@gmail.com', Phone: '+919494160540',Username:"raju",Department:'Clerk',Location:'Hyderabad',Manager:'admin',Notes:'Created by DB seeder',Status:'In Active'},
	{Name: 'Rafi', Title: 'Production', Email: 'rafi@gmail.com', Phone: '+919349999334',Username:"rafi",Department:'Human Resources',Location:'Hyderabad',Manager:'admin',Notes:'Created by DB seeder',Status:'Active'},
	{Name: 'Kumar', Title: 'Meat Packer', Email: 'kumar@gmail.com', Phone: '+919349999334',Username:"kumar",Department:'Client Services',Location:'Hyderabad',Manager:'admin',Notes:'Created by DB seeder',Status:'Active'},
	{Name: 'Naresh', Title: 'Computer Programmer', Email: 'naresh@gmail.com', Phone: '+919966481421',Username:"naresh",Department:'Programmer',Location:'Hyderabad',Manager:'admin',Notes:'Created by DB seeder',Status:'In Active'},
	{Name: 'Rajesh', Title: 'File Clerk', Email: 'rajesh@gmail.com', Phone: '+919349999334',Username:"rajesh",Department:'Marketing',Location:'Hyderabad',Manager:'admin',Notes:'Created by DB seeder',Status:'Active'},
	{Name: 'Srikanth', Title: 'Rail Yard Engineer', Email: 'srikant@gmail.com', Phone: '+919492879947',Username:"srikanth",Department:'Engineer',Location:'Hyderabad',Manager:'admin',Notes:'Created by DB seeder',Status:'Active'},
	{Name: 'Sai', Title: 'Sales Person', Email: 'sai@gmail.com', Phone: '+919966479727',Username:"sai",Department:'Sales',Location:'Hyderabad',Manager:'admin',Notes:'Created by DB seeder',Status:'Active'},
	{Name: 'Sai Kumar', Title: 'Production Laborer', Email: 'saikumar@gmail.com', Phone: '_919349999334',Username:"saikumar",Department:'Dept of Silly Walks	',Location:'Hyderabad',Manager:'admin',Notes:'Created by DB seeder',Status:'In Active'},

];