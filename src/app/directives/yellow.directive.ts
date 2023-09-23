import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[directiveYellow]'
})
export class YellowDirective {

  constructor(private el: ElementRef) { 
    el.nativeElement.style.color = '#cecb40'
  }

}
