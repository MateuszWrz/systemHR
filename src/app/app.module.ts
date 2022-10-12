import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeesListComponent } from './employees/employees-list/employees-list.component';
import { EmployeeAddComponent } from './employees/employee-add/employee-add.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { EditEmployeesComponent } from './employees/employees-list/edit-employees/edit-employees.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeesListComponent,
    EmployeeAddComponent,
    HeaderComponent,
    FooterComponent,
    EditEmployeesComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
