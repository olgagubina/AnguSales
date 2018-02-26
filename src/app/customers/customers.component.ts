import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppDataService } from '../app-data.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { CustomerFormComponent } from '../customer-form/customer-form.component';
import { Customer } from '../models/customer'
import { Company } from '../models/company'

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: Customer[];
  companies: Company[];
  customer: Customer = new Customer;

  constructor(private dataService: AppDataService, public dialog: MatDialog) { }

  ngOnInit() {
    this.dataService.getCustomers().subscribe(
      data => {
        this.customers = data;
        console.log(this.customers)
      },
      error => {
        console.error(error)
    });

    this.dataService.getCompanies().subscribe(
      data => {
        this.companies = data;
        console.log(this.companies)
      },
      error => {
        console.error(error)
    })
  }


  //ADD CUSTOMER
  openDialog(): void {
    let dialogRef = this.dialog.open(CustomerFormComponent, {
      width: '290px',
      data: { name: this.customer.name, 
              lastName:this.customer.lastName, 
              email: this.customer.email,
              phone: this.customer.phone,
              company: this.customer.company
            }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      var newCustomer =  Object.assign({},result);
      var company = this.companyNameToId(result.company);
      newCustomer.company = company.id;
      console.log(newCustomer);

      //POST request
      this.dataService.addCustomer(newCustomer).subscribe(
        data => {
          this.dataService.getCustomers().subscribe(
            data => {
              this.customers = data;
              console.log(this.customers)
            },
            error => {
              console.error(error)
          });
          // this.customer = Object.assign({},data);
          // this.customer.company = company.name;
          // this.customer.country = company.country;
          // this.customers.push(this.customer);
        },
        error => {
          console.error(error)
        })
      
      // //Add to the component data scope
      // this.customer = Object.assign({},result);
      // this.customer.id = this.generateId();
      // this.customer.country = company.country;
      // this.customers.push(this.customer);

      //Clean the input
      this.customer = new Customer;
    });
  }

  companyNameToId(name) {
    console.log(name);
    var companyIndex = this.companies.findIndex((company) => company.name.toString() == name.toString());
    console.log(this.companies[companyIndex].id);
    return this.companies[companyIndex];
  }

  generateId() {
    return this.customers[this.customers.length-1].id + 1;
  }

  //EDIT CUSTOMER
  EditCustomer(customer: Customer) {

    this.dataService.editCustomer(customer);
  }


  //DELETE CUSTOMER
  DeleteCustomer(customer: Customer) {
    this.dataService.deleteCustomer(customer).subscribe(
      data => {
        this.dataService.getCustomers().subscribe(
          data => {
            this.customers = data;
            console.log(this.customers)
          },
          error => {
            console.error(error)
        });
      },
      error => {
        console.error(error)
      });
  }
}
