import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.less']
})
export class ReportsComponent implements OnInit {

  reportColumns = [
    {id: 'name', name: 'Nazwa'},
    {id: 'full_date', name: 'Data'},
    {id: 'hour', name: 'Godzina'},
    {id: 'action_user', name: 'Użytkownik'},
    {id: 'premises_id', name: 'Lokal'}
  ];

  reportColumnsNames: string[];

  constructor() { }

  ngOnInit() {
    this.reportColumnsNames = this.reportColumns.map(x => x.id);
  }

}
