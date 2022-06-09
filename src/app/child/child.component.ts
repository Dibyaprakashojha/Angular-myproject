import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  // use input to get data from parent component
  @Input('childO') child1 = 'From child one';
  // give a dummy property name
  @Input('childT') child2 = 'From child two';
  @Input() parent1 = '';
  @Input() parent2 = '';
  @Input() parent3 = '';
  // child emit the event
  // emitted data is captured by message. AN object of EventEmitter
  // data is emitted tot the parent component
  @Output() messageEvent = new EventEmitter<string>();
  @Output() childEvent = new EventEmitter<string>();

  show = () => {
    this.messageEvent.emit('From first child');
  };

  printName = (uname: string) => {
    this.childEvent.emit(`Welcome ${uname}`);
  };
  constructor() {}

  ngOnInit(): void {}
}
