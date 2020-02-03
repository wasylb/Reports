import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Export} from '../../shared/models/export';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExportService {

  exportsUrl = '/exports';

  constructor(private httpClient: HttpClient) {
  }

  public getExports(): Observable<Export[]> {
    return this.httpClient.get<Export[]>(environment.apiUrl + this.exportsUrl);
  }
}
