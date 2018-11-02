import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
    name: string;
    position: String;
    weight: string;
    symbol: string;
    target:string;
    floppy:number
  }
  
  const ELEMENT_DATA: PeriodicElement[] = [
    {position: 'Thu Nov 01, 2018 11:52PM', name: 'Admin User', weight: 'checkout', symbol: 'Acrobat',target:'Macbook Pro 13" (1400284932)',floppy:0},
    {position: 'Thu Nov 01, 2018 11:52PM', name: 'Admin User', weight: 'Update', symbol: 'Acrobat',target:'Macbook Pro 13" (1400284932)',floppy:0},
    {position: 'Thu Nov 01, 2018 11:52PM', name: 'Admin User', weight: 'checkout', symbol: 'Acrobat',target:'Macbook Pro 13" (1400284932)',floppy:0},
    {position: 'Thu Nov 01, 2018 11:52PM', name: 'Admin User', weight: 'checkout', symbol: 'Acrobat',target:'Macbook Pro 13" (1400284932)',floppy:0},
    {position: 'Thu Nov 01, 2018 11:52PM', name: 'Create New', weight: 'checkout', symbol: 'Acrobat',target:'Macbook Pro 13" (1400284932)',floppy:0},
    {position: 'Thu Nov 01, 2018 10:57PM', name: 'Admin User', weight: 'Requested', symbol: 'Acrobat',target:'Macbook Pro 13" (1400284932)',floppy:0},
    {position: 'Thu Nov 01, 2018 11:52PM', name: 'Admin User', weight: 'checkout', symbol: 'Acrobat',target:'Macbook Pro 13" (1400284932)',floppy:0},
    {position: 'Thu Nov 01, 2018 11:52PM', name: 'Admin User', weight: 'Update', symbol: 'Acrobat',target:'Macbook Pro 13" (1400284932)',floppy:0},
    {position: 'Thu Nov 01, 2018 9:08PM	', name: 'Admin User', weight: 'Requested', symbol: 'Acrobat',target:'Macbook Pro 13" (1400284932)',floppy:0},
    {position: 'Thu Nov 01, 2018 12:52PM', name: 'Admin User', weight: 'checkout', symbol: 'Acrobat',target:'Macbook Pro 13" (1400284932)',floppy:0},
    {position: 'Thu Nov 01, 2018 9:08PM', name: 'Admin User', weight: 'Requested', symbol: 'Acrobat',target:'Macbook Pro 13" (1400284932)',floppy:0},
  ];

@Component({
    selector: 'app-dashboard-crm',
    templateUrl: './dashboard-crm.component.html',
    styleUrls: ['./dashboard-crm.component.scss']
})

export class DashboardCrmComponent implements OnInit {
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','target','floppy'];
    dataSource = ELEMENT_DATA

    public dashCard = [
        { colorDark: '#5C6BC0', colorLight: '#7986CB', number: 1375, title: 'TOTAL ASSETS', icon: 'local_grocery_store',link: '/auth/tables/fixed' },
        { colorDark: '#42A5F5', colorLight: '#64B5F6', number: 50, title: 'TOTAL LICENSES', icon: 'new_releases',link: '/auth/tables/featured' },
        { colorDark: '#26A69A', colorLight: '#4DB6AC', number: 4, title: 'TOTAL ACCESSORIES', icon: 'assignments',link: '/auth/tables/responsive' },
        { colorDark: '#66BB6A', colorLight: '#81C784', number: 2, title: 'TOTAL CONSUMABLES', icon: 'account_balance',link: '/auth/tables/fixed' }
    ];

    tableData = [
        { country: 'Working', sales: 5400, percentage: '40%' },
        { country: 'Deployed', sales: 3200, percentage: '30.33%' },
        { country: 'Pending', sales: 2233, percentage: '18.056%' },
        { country: 'Archived', sales: 600, percentage: '6%' },
       
    ];

    constructor() { }

    ngOnInit() {
    }

}
