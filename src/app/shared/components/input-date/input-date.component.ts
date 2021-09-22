import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss']
})
export class InputDateComponent implements OnInit {
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
