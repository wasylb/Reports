import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatDatepickerModule,
    FlexLayoutModule,
    MatCardModule
  ],
  exports: [
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatDatepickerModule,
    FlexLayoutModule,
    MatCardModule
  ]
})
export class CustomMaterialModule {
}
