import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'ng10-name',
  template: `
    <ng-content></ng-content>
  `
})  
export class Ng10NameComponent {
  @Input() name: string;
  @Output() submitted = new EventEmitter<any>();
  
  constructor(private service: SharedService) {
    this.service.on('event.submitted', (event) => {
      console.log('onSubmit inside ng10', this.name);
    });
  }
}
