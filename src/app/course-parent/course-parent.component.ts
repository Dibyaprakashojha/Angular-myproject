import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CourseChildComponent } from '../course-child/course-child.component';

@Component({
  selector: 'app-course-parent',
  templateUrl: './course-parent.component.html',
  styleUrls: ['./course-parent.component.css'],
})
export class CourseParentComponent
  implements OnInit, AfterViewInit, AfterViewChecked
{
  academyName: string = 'Shristi Tech';
  coursename: string = '';
  trainerName: string = '';
  // get the reference of the child component
  @ViewChild(CourseChildComponent) childRef!: CourseChildComponent;
  // get the reference of the headerOne
  @ViewChild('headerOne') header!: ElementRef;

  constructor() {}
  ngAfterViewChecked(): void {
    console.log(`child Data Course${this.childRef.courseName}`);
    console.log(`child Data Trainer${this.childRef.trainerName}`);
    this.coursename = this.childRef.courseName;
    this.trainerName = this.childRef.trainerName;
    this.header.nativeElement.style.color = 'green';
  }

  ngAfterViewInit(): void {
    console.log(`chiild Data ${this.childRef.courseName}`);
    this.coursename = this.childRef.courseName;
    this.trainerName = this.childRef.trainerName;
    this.header.nativeElement.style.color = 'blue';
  }

  ngOnInit(): void {
    console.log(`${this.academyName}`);
  }
}
