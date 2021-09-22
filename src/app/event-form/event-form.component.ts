import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IEventDetails, EventServiceService } from '../shared/service/event-service.service';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit, OnDestroy {
  private unSub: Subscription;
  title: string;
  public form;
  constructor(
    private evtService: EventServiceService,
    private route: Router,
    private fb: FormBuilder,
    private _Activatedroute:ActivatedRoute
  ) { 
    this.title = `Event Form`;
  }
  ngOnInit(): void {
    this.form = this.fb.group({event_name: '', event_organizer: '', event_date: '', event_duration: '', event_place: ''});
    this.unSub = this._Activatedroute.queryParams.pipe(
      switchMap(params => this.evtService.getEventById(params.id))
    ).subscribe((event: IEventDetails) => {
      if (event) {
        this.title = 'Event Details';
        this.disableControl(true);
        this.form.get('event_name').setValue(event.event_name);
        this.form.get('event_organizer').setValue(event.event_organizer);
        this.form.get('event_place').setValue(event.event_place);
        this.form.get('event_date').setValue(new Date(1632141258).toISOString().slice(0,16));
        this.form.get('event_duration').setValue(event.event_duration);
      }
    });
    this.disableControl(false);
  }
  private disableControl(value: boolean) {
    if (value) {
      this.form.disable({ emitEvent: false });
    } else {
      this.form.enable({ emitEvent: false });
    }
  }
  onSubmit(): void {
    const reqBody = {...this.form.value};
    reqBody.event_date = new Date(reqBody.event_date).valueOf() / 1000;
    this.evtService.createEvent(this.form.value).subscribe(data => {
      this.route.navigate(['events']);
    });
  }
  onCancel(): void {
    this.route.navigate(['events']);
  }
  ngOnDestroy(): void {
    this.unSub.unsubscribe();
  }
}
