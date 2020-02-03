import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReportsComponent} from './components/reports/reports.component';
import {CustomMaterialModule} from '../custom-material/custom-material.module';
import {SharedModule} from '../shared/shared.module';
import {ExportService} from '../core/services/export.service';


@NgModule({
  declarations: [ReportsComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
    SharedModule
  ],
  exports: [
    ReportsComponent
  ],
  providers: [ExportService]
})
export class GeneralModule {
}
