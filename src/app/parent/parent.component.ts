import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  pmessage1 = 'From parent one';
  pmessage2 = 'From parent two';
  firstChild = '';
  secondChild = '';
  constructor() {}

  ngOnInit(): void {}
}
