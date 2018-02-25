import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppDataService {

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<[any]> {
    return this.http.get<[any]>('api/getCustomers');
  }
}
