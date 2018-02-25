import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Customer } from './models/customer'
import { Company } from './models/company'

@Injectable()
export class AppDataService {

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>('api/getCustomers');
  }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>('api/getCompanies');
  }

  addCustomer(newCustomer: Customer): Observable<Customer> {
    var newCustomerForDB = {
      FirstName: newCustomer.name,
      LastName: newCustomer.lastName,
      Email: newCustomer.email,
      Phone: newCustomer.phone,
      Company: newCustomer.company
    }

    console.log(newCustomerForDB);
    return this.http.post<Customer>('api/addCustomer', {customer: newCustomerForDB});
  }
}
