import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './components/reports/reports.component';
import { CustomMaterialModule } from '../custom-material/custom-material.module';



@NgModule({
  declarations: [ReportsComponent],
  imports: [
    CommonModule,
    CustomMaterialModule
  ],
  exports: [
    ReportsComponent
  ]
})
export class GeneralModule { }
