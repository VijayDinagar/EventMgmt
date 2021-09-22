import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IEventDetails, EventServiceService } from '../shared/service/event-service.service';

@Component({
  selector: 'app-event-list-view',
  templateUrl: './event-list-view.component.html',
  styleUrls: ['./event-list-view.component.scss']
})
export class EventListViewComponent implements OnInit {
  public events$: Observable<IEventDetails[]>;
  // public events: IEventDetails[];
  constructor(private route: Router,
    private evtService: EventServiceService) { }

  ngOnInit(): void {
    // this.evtService.getAllEvents().subscribe(data => (this.events = data));
    this.events$ = this.evtService.getAllEvents();
  }
  onCreate(): void {
    this.route.navigate(['event']);
  }
  onEdit(event): void {
    this.route.navigate(['event'], { queryParams: { id: event.id } })
  }
  onDelete(event): void {
    this.evtService.deleteEvent(event.id).subscribe(data => {
      console.log(data);
      this.events$ = this.evtService.getAllEvents();
    });
  }
}
