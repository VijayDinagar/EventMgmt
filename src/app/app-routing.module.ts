import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventFormComponent } from './event-form/event-form.component';
import { EventListViewComponent } from './event-list-view/event-list-view.component';

const routes: Routes = [
  { 
    path: 'event/:id',
    component: EventFormComponent
  },
  {
    path: 'events',
    component: EventListViewComponent
  },
  { 
    path: '**',
    component: EventFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
