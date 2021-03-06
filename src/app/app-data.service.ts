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

  updateCustomer(edittedCustomer: Customer): Observable <Customer> {
    console.log(edittedCustomer);
    var edittedCustomerForDB = {
      FirstName: edittedCustomer.name,
      LastName: edittedCustomer.lastName,
      Email: edittedCustomer.email,
      Phone: edittedCustomer.phone,
      Company: edittedCustomer.company
    }
    console.log(edittedCustomerForDB);
    return this.http.put <Customer>('api/editCustomer/'+edittedCustomer.id, {customer: edittedCustomerForDB});
  }


  deleteCustomer(deletedCustomer: Customer): Observable <Customer> {
    console.log(deletedCustomer);
    return this.http.delete <Customer>('api/deleteCustomer/'+deletedCustomer.id);
  }
}
