import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';

@Component({
  selector: 'app-attr-directive',
  templateUrl: './attr-directive.component.html',
  styleUrls: ['./attr-directive.component.css'],
})
export class AttrDirectiveComponent implements OnInit {
  fruit = 'apple';
  coursesArray = [
    new Course('Java', 2300, 'backend', 'online'),
    new Course('Angular', 22300, 'frontend', 'offline', 'Jinto'),
    new Course('NodeJS', 12300, 'backend', 'online'),
    new Course('React', 13300, 'frontend', 'offline'),
    new Course('Spring', 12000, 'backend', 'offline', 'Sripriya'),
    new Course('Hibernate', 12000, 'backend', 'offline', 'Sripriya'),
  ];
  constructor() {}

  ngOnInit(): void {}
}
