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
    {position: 'Laptops', name: 'Assets', weight: '1174', symbol: '0',target:'0',floppy:0},
    {position: 'Desktops', name: 'Assets',weight: '94', symbol: '0',target:'4',floppy:0},
    {position: 'Mobile Phones',name: 'Assets', weight: '60', symbol: '0',target:'4',floppy:0},
    {position: 'Displays',name: 'Assets', weight: '10', symbol: '0',target:'4',floppy:0},
    {position: 'Tablets', name: 'accessory', weight: '50', symbol: '0',target:'4',floppy:0},
    {position: 'Voip Phones',  name: 'accessory',  weight: '98', symbol: '0',target:'4',floppy:0},
    {position: 'Conference Phones',  name: 'accessory',  weight: '76', symbol: '0',target:'2',floppy:0},
    {position: 'Keyboard',  name: 'accessory', weight: '0', symbol: '0',target:'1',floppy:0},
    {position: 'Mouse', name: 'consumable', weight: '0', symbol: '0',target:'0',floppy:0},
    {position: 'Printers',  name: 'consumable',  weight: '0', symbol: '1',target:'1',floppy:0},
    {position: 'RAM', name: 'component',  weight: '0', symbol: '0',target:'3',floppy:0},
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
        { colorDark: '#5C6BC0', colorLight: '#7986CB', number: 50, title: 'TOTAL ASSETS', icon: 'local_grocery_store',link: '/auth/tables/fixed' },
        { colorDark: '#42A5F5', colorLight: '#64B5F6', number: 10, title: 'TOTAL LICENSES', icon: 'new_releases',link: '/auth/tables/featured' },
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
