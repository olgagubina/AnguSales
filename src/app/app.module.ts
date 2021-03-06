import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule, MatInputModule, MatFormFieldModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CustomersComponent } from './customers/customers.component';
import { CompaniesComponent } from './companies/companies.component';
import { AppDataService } from './app-data.service';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomerActivitiesComponent } from './customer-activities/customer-activities.component';
// import { FilterPipe} from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomersComponent,
    CompaniesComponent,
    CustomerFormComponent,
    CustomerActivitiesComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    FormsModule, 
    MatDialogModule, 
    MatInputModule, 
    MatFormFieldModule,
    BrowserAnimationsModule 
  ],
  entryComponents:[CustomerFormComponent],
  providers: [AppDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
