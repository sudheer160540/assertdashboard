import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { TablesRouterModule } from './tables.router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule,
         MatSortModule,
         MatCheckboxModule,
         MatTooltipModule,
         MatChipsModule,
         MatButtonToggleModule } from '@angular/material';


import * as hljs from 'highlight.js';
import { HighlightJsModule, HIGHLIGHT_JS } from 'angular-highlight-js';
import * as hljsTypescript from 'highlight.js/lib/languages/typescript';
import { FilterTableComponent } from './filter-table/filter-table.component';
import { FeatureTableComponent } from './feature-table/feature-table.component';
import { ResponsiveTableComponent } from './responsive-table/responsive-table.component';
import { FixedTableComponent } from './fixed-table/fixed-table.component';
import { AssetsdetailsComponent } from './assetsdetails/assetsdetails.component';
import { LicenseReportComponent } from './license-report/license-report.component';
import { AccessoryReportComponent } from './accessory-report/accessory-report.component';
import { DepreciationReportComponent } from './depreciation-report/depreciation-report.component';
import { LicensesDataComponent } from './licenses-data/licenses-data.component';
import { AccessoriesDataComponent } from './accessories-data/accessories-data.component';
import { ConsumablesDataComponent } from './consumables-data/consumables-data.component';
import { ComponentDataComponent } from './component-data/component-data.component';


export function highlightJsFactory(): any {
  hljs.registerLanguage('typescript', hljsTypescript);
  return hljs;
}

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule,
    MatListModule,
    MatStepperModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatChipsModule,
    MatButtonToggleModule,
    HighlightJsModule.forRoot({
      provide: HIGHLIGHT_JS,
      useFactory: highlightJsFactory
    }),
    TablesRouterModule
  ],
  declarations: [
   FilterTableComponent,
   FeatureTableComponent,
   ResponsiveTableComponent,
   FixedTableComponent,
   AssetsdetailsComponent,
   LicenseReportComponent,
   AccessoryReportComponent,
   DepreciationReportComponent,
   LicensesDataComponent,
   AccessoriesDataComponent,
   ConsumablesDataComponent,
   ComponentDataComponent],

  exports: [
    ]
      
})
export class TablesModule { }


