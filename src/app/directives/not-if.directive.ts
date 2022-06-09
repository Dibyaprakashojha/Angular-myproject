import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNotIf]',
})
export class NotIfDirective {
  @Input() set appNotIf(condition: boolean) {
    // if condition is false
    if (!condition)
      // then show the template inside the embedded view
      this._viewContainer.createEmbeddedView(this._templateRef);
    else this._viewContainer.clear();
  }

  // a view container can have any number of views
  // embedded views can be created and added to a container
  // templates can be added inside the views using templateRef
  // represents a container which contains multiple views
  // can be attached to a component
  constructor(
    private _templateRef: TemplateRef<any>,
    private _viewContainer: ViewContainerRef
  ) {}
}
