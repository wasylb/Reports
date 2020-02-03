import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatDatepickerModule
  ],
  exports: [
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatDatepickerModule
  ]
})
export class CustomMaterialModule { }
