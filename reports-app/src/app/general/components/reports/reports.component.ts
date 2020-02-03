import {Component, OnInit} from '@angular/core';
import {ExportService} from '../../../core/services/export.service';
import {Export} from '../../../shared/models/export';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.less']
})
export class ReportsComponent implements OnInit {

  appTitle = 'Raport';
  premisesPlaceholder = 'Lokal:';
  fromDatePlaceholder = 'Od:';
  toDatePlaceholder = 'Do:';
  buttonCaption = 'Zatwierdź';
  dataFetchErrorMsg = 'Błąd podczas pobierania danych. Skontaktuj się z administratorem.';
  dateRangeErrorMsg = 'Zakres dat musi wynosić więcej niż 1 dzień';

  premisesOptions = [1, 2, 3, 4];
  reportColumns = [
    {id: 'name', name: 'Nazwa'},
    {id: 'full_date', name: 'Data'},
    {id: 'hour', name: 'Godzina'},
    {id: 'action_user', name: 'Użytkownik'},
    {id: 'premises_id', name: 'Lokal'}
  ];

  reportColumnsNames: string[];
  exportsDatasource: Export[];

  constructor(private exportService: ExportService,
              private snackbar: MatSnackBar) {
  }

  ngOnInit() {
    this.reportColumnsNames = this.reportColumns.map(x => x.id);
    this.exportsDatasource = [];
  }

  public submit(premisesId, fromDate, toDate) {
    this.exportService.getExports().subscribe(exports => {
        this.filterExportData(exports, premisesId, fromDate, toDate);
      },
      error => {
        this.snackbar.open(this.dataFetchErrorMsg);
      });
  }

  private filterExportData(exports: Export[], premisesId, fromDate, toDate) {
    this.exportsDatasource = exports.filter((expPremises) => {
      return expPremises.premises_id == premisesId;
    }).filter((expDate) => {
      const exportsDate = new Date(expDate.full_date);
      exportsDate.setHours(0);
      exportsDate.setMinutes(0);
      exportsDate.setSeconds(0);
      exportsDate.setMilliseconds(0);
      const exportsDateTime = exportsDate.getTime();
      const exportsFromDate = new Date(fromDate).getTime();
      const exportsToDate = new Date(toDate).getTime();

      if (exportsFromDate === exportsToDate) {
        this.snackbar.open(this.dateRangeErrorMsg, null, {duration: 2000});
      } else {
        const tmpExportsDate = new Date(expDate.full_date);
        tmpExportsDate.setHours(tmpExportsDate.getHours() - 1);
        expDate.full_date = tmpExportsDate.toUTCString();
        return ((exportsDateTime >= exportsFromDate) && (exportsDateTime <= exportsToDate));
      }
    });
  }
}
