import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FixedTableComponent } from './fixed-table/fixed-table.component';
import { FeatureTableComponent } from './feature-table/feature-table.component';
import { FilterTableComponent } from './filter-table/filter-table.component';
import { ResponsiveTableComponent } from './responsive-table/responsive-table.component';
import { AssetsdetailsComponent } from './assetsdetails/assetsdetails.component';

import { LicenseReportComponent } from './license-report/license-report.component';
import { AccessoryReportComponent } from './accessory-report/accessory-report.component';
import { DepreciationReportComponent } from './depreciation-report/depreciation-report.component';


import { LicensesDataComponent } from './licenses-data/licenses-data.component';
import { AccessoriesDataComponent } from './accessories-data/accessories-data.component';
import { ConsumablesDataComponent } from './consumables-data/consumables-data.component';
import { ComponentDataComponent } from './component-data/component-data.component';

const materialWidgetRoutes: Routes = [
  	{ path: 'fixed', component: FixedTableComponent , data: { animation: 'fixed' }},
  	{ path: 'featured', component: FeatureTableComponent ,data: { animation: 'featured' }},
    { path: 'responsive', component: ResponsiveTableComponent ,data: { animation: 'responsive' }},
    { path: 'filter', component: FilterTableComponent ,data: { animation: 'responsive' }},
    { path: 'assertDetails', component: AssetsdetailsComponent ,data: { animation: 'responsive' }},
    { path: 'licensereport', component: LicenseReportComponent ,data: { animation: 'responsive' }},
    { path: 'accessoryreport', component: AccessoryReportComponent ,data: { animation: 'responsive' }},
    { path: 'depreciationreport', component: DepreciationReportComponent ,data: { animation: 'responsive' }},
    { path: 'licensesdata', component: LicensesDataComponent ,data: { animation: 'responsive' }},
    { path: 'accessoriesdata', component: AccessoriesDataComponent ,data: { animation: 'responsive' }},
    { path: 'consumablesdata', component: ConsumablesDataComponent ,data: { animation: 'responsive' }},
    { path: 'componentdata', component: ComponentDataComponent ,data: { animation: 'responsive' }}
];

@NgModule({
  imports: [
    RouterModule.forChild(materialWidgetRoutes)
  	],
  exports: [
    RouterModule
  ]
})
export class TablesRouterModule {}