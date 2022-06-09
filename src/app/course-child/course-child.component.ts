import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-child',
  templateUrl: './course-child.component.html',
  styleUrls: ['./course-child.component.css'],
})
export class CourseChildComponent implements OnInit {
  @Input() acadname: string = '';
  courseName: string = 'Angular';
  trainerName: string = 'Sri';

  constructor() {}

  ngOnInit(): void {}
}
