import {
  AfterViewInit,
  Component,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { CourseChildComponent } from '../course-child/course-child.component';

@Component({
  selector: 'app-course-multi-parent',
  templateUrl: './course-multi-parent.component.html',
  styleUrls: ['./course-multi-parent.component.css'],
})
export class CourseMultiParentComponent implements OnInit, AfterViewInit {
  childArray: CourseChildComponent[] = [];
  //to get the ref of all the child components
  // returns a list of components as Querylist
  @ViewChildren(CourseChildComponent)
  childrenRef!: QueryList<CourseChildComponent>;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.childrenRef.toArray().forEach((child) => {
      console.log(`Data: ${child.acadname}`);
      console.log(`Data: ${child.trainerName}`);
    });
    this.childArray = this.childrenRef.toArray();
  }
}
