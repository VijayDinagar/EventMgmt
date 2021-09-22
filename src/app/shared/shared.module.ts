import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { InputTextComponent } from './components/input-text/input-text.component';
import { InputDateComponent } from './components/input-date/input-date.component';
import { InputTimeComponent } from './components/input-time/input-time.component';
import { InputDurationComponent } from './components/input-duration/input-duration.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const COMPONENTS = [
  InputTextComponent, InputDateComponent, InputTimeComponent, InputDurationComponent, PageNotFoundComponent
]

@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class SharedModule { }
