import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appAppDirective]'
})
export class HighlightDirective {

    constructor(private elem: ElementRef) {
        this.elem.nativeElement.style.backgroundColor = 'gold';
    }
