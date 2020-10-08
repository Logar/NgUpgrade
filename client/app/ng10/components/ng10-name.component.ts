import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'ng10-name',
  template: `
    <ng-content></ng-content>
  `
})  
export class Ng10NameComponent implements OnInit{
  @Input() firstname: String;
  @Input() lastname: String;
  // @Input() age: Number;

  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.service.on('event.submitted', (event) => {
      console.log('---- Submit handler inside ng10 ----');
      console.log('Name: ', this.firstname, this.lastname);
      // console.log('Age: ', this.age);
    });
  }
}
