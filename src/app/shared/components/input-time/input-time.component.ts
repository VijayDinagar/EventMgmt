import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-time',
  templateUrl: './input-time.component.html',
  styleUrls: ['./input-time.component.scss']
})
export class InputTimeComponent implements OnInit {
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
