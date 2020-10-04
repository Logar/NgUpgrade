import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'hero-detail',
    template: `
        <div class="ng4"> 
        This is Angular (NG4) Area
            <h2>{{hero}} details!</h2>
            <div><label>id: </label>{{hero}}</div>
            <button (click)="onDelete()">Delete</button>
        </div>
  `
})
export class HeroDetailComponent {
    @Input() hero: any;
    @Output() deleted = new EventEmitter<any>();
    onDelete() {
        this.deleted.emit(this.hero);
    }
}