import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard-crm',
    templateUrl: './dashboard-crm.component.html',
    styleUrls: ['./dashboard-crm.component.scss']
})

export class DashboardCrmComponent implements OnInit {

    public dashCard = [
        { colorDark: '#5C6BC0', colorLight: '#7986CB', number: 1375, title: 'TOTAL ASSETS', icon: 'local_grocery_store' },
        { colorDark: '#42A5F5', colorLight: '#64B5F6', number: 50, title: 'TOTAL LICENSES', icon: 'new_releases' },
        { colorDark: '#26A69A', colorLight: '#4DB6AC', number: 4, title: 'TOTAL ACCESSORIES', icon: 'assignments' },
        { colorDark: '#66BB6A', colorLight: '#81C784', number: 2, title: 'TOTAL CONSUMABLES', icon: 'account_balance' }
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
