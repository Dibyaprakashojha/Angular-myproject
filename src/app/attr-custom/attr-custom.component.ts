import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attr-custom',
  templateUrl: './attr-custom.component.html',
  styleUrls: ['./attr-custom.component.css'],
})
export class AttrCustomComponent implements OnInit {
  username = '';
  todayDate: Date = new Date();

  constructor() {}

  ngOnInit(): void {}
}
