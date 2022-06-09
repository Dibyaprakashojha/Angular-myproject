import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css'],
})
export class LifecycleComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  username: string = '';
  @Input() parentData: string = 'Dibya';

  constructor() {
    console.log(`In constructor - lifecycle ${this.parentData}`);
  }
  ngDoCheck(): void {
    console.log(`On DoCheck ${this.parentData}`);
  }
  ngAfterContentInit(): void {
    console.log(`On AfterContentInit ${this.parentData}`);
  }
  ngAfterContentChecked(): void {
    console.log(`On AfterContentChecked ${this.parentData}`);
  }
  ngAfterViewInit(): void {
    console.log(`On AfterViewInit ${this.parentData}`);
  }
  ngAfterViewChecked(): void {
    console.log(`On AfterViewChecked ${this.parentData}`);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(`OnChanges - lifecycle ${this.parentData}`);
  }

  ngOnInit(): void {
    console.log(`On init - lifecycle ${this.username}`);
    console.log(`On init - lifecycle ${this.parentData}`);
  }
}
