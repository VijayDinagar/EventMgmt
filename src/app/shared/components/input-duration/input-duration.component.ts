import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-duration',
  templateUrl: './input-duration.component.html',
  styleUrls: ['./input-duration.component.scss']
})
export class InputDurationComponent implements OnInit {
  @Input() value: string;
  @Input() control = new FormControl();
  @Input() placeHolder: string;
  @Input() set disable(value: boolean) {
    this.disableControl(value);
  };
  constructor() { }

  ngOnInit(): void {
  }
  private disableControl(value: boolean) {
    if (value) {
      this.control.disable({ emitEvent: false });
    } else {
      this.control.enable({ emitEvent: false });
    }
  }
}
