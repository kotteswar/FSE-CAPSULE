import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { ShowTaskComponent } from './show-task/show-task.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { MatFormFieldModule } from '@angular/material';
import {DemoMaterialModule} from '../material-module';
import { HttpClientModule} from '@angular/common/http';  

//import { MatFormFieldModule } from '@angular/material';
//import { MatInputModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    CreateTaskComponent,
    UpdateTaskComponent,
    ShowTaskComponent,
    DatepickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    DemoMaterialModule,
     HttpClientModule,
    
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
