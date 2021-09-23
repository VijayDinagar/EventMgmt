import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListViewComponent } from './event-list-view.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list' ;
import { MatCardModule } from '@angular/material/card' ;
import { MatButtonModule } from '@angular/material/button' ;

@NgModule({
  declarations: [EventListViewComponent],
  exports: [EventListViewComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule
  ]
})
export class EventListViewModule { }
