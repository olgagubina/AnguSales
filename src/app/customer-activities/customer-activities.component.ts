import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppDataService } from '../app-data.service';

import { Customer } from '../models/customer'
import { Company } from '../models/company'

@Component({
  selector: 'app-customer-activities',
  templateUrl: './customer-activities.component.html',
  styleUrls: ['./customer-activities.component.css']
})

export class CustomerActivitiesComponent implements OnInit {
  @Input() customer: Customer;
  @Output() EditClick: EventEmitter <Customer> = new EventEmitter <Customer>();
  @Output() DeleteClick: EventEmitter <Customer> = new EventEmitter <Customer>();


  constructor() { }

  ngOnInit() {
  }

  Edit() {
    this.EditClick.emit(this.customer);
  }

  Delete() {
    this.DeleteClick.emit(this.customer);
  }

}
