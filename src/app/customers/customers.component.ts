import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppDataService } from '../app-data.service';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
// import { CustomerFormComponent } from '../customer-form/customer-form.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: [any];

  constructor(private dataService: AppDataService, /*public dialog: MatDialog*/) { }

  // openDialog(): void {
  //   let dialogRef = this.dialog.open(CustomerFormComponent, {
  //     width: '600px',
  //     height: '1000px'
  //     // data: { name: this.name, animal: this.animal }
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     // this.animal = result;
  //   });
  // }

  ngOnInit() {
    this.dataService.getCustomers().subscribe(
      data => {
        this.customers = data;
        console.log(this.customers)
      },
      error => {
        console.error(error)
      })
  }

}
