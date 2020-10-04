import { Directive, ElementRef, Injector, SimpleChanges } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
  selector: 'test-tag'
})
export class TestDirective extends UpgradeComponent {
  constructor(elementRef: ElementRef, injector: Injector) {
    super('testTag', elementRef, injector);
  }
}