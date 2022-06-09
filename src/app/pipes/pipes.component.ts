import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent implements OnInit {
  dateBirth = new Date('1997-01-01');
  employeeArray = [
    new Employee('Awadhesh', 'Ayodhya', 30000, 1000, this.dateBirth),
  ];

  choiceType = '';
  propertyName = '';
  course: Course = {
    courseName: '',
    cost: 0,
    type: '',
    medium: '',
    trainer: '',
  };
  // propNames = ['courseName', 'cost', 'type', 'medium', 'trainer'];
  propNames: string[] = [];
  courses = [
    new Course('Java', 2300, 'backend', 'online'),
    new Course('Angular', 22300, 'frontend', 'offline', 'Jinto'),
    new Course('NodeJS', 12300, 'backend', 'online'),
    new Course('Jira', 13300, 'devops', 'offline'),
    new Course('Spring', 12000, 'backend', 'offline', 'Sripriya'),
    new Course('React', 12000, 'frontend', 'offline', 'Sripriya'),
  ];
  constructor() {}

  ngOnInit(): void {
    for (const key in this.course) {
      this.propNames.push(key);
    }
  }
}
