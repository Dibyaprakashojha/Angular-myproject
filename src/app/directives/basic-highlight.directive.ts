import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]',
})
export class BasicHighlightDirective implements OnInit {
  // gives the ref to the element in which the directive is added
  // ElementRef ref will be injected to BasicHighlightDirective
  constructor(private _elementRef: ElementRef) {}
  // this will be called only once, when the component is rendered to the browser
  ngOnInit(): void {
    this._elementRef.nativeElement.style.color = 'green';
    this._elementRef.nativeElement.style.textTransform = 'uppercase';
  }
}
