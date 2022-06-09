import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
// implements
//   OnInit,
//   OnChanges,
//   DoCheck,
//   AfterContentInit,
//   AfterContentChecked,
//   AfterViewInit,
//   AfterViewChecked
export class AppComponent {
  title = 'Have a great day!';

  constructor() {}

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(`On Changes - app`);
  // }
  // ngOnInit(): void {
  //   console.log(`On init - app ${this.title}`);
  // }

  // ngDoCheck(): void {
  //   console.log(`On DoCheck -app`);
  // }
  // ngAfterContentInit(): void {
  //   console.log(`On AfterContentInit -app`);
  // }
  // ngAfterContentChecked(): void {
  //   console.log(`On AfterContentChecked -app`);
  // }
  // ngAfterViewInit(): void {
  //   console.log(`On AfterViewInit -app`);
  // }
  // ngAfterViewChecked(): void {
  //   console.log(`On AfterViewChecked -app`);
  // }
}
