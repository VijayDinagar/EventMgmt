import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListViewComponent } from './event-list-view.component';



@NgModule({
  declarations: [EventListViewComponent],
  exports: [EventListViewComponent],
  imports: [
    CommonModule
  ]
})
export class EventListViewModule { }
