import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-temp-form',
  templateUrl: './temp-form.component.html',
  styleUrls: ['./temp-form.component.css'],
})
export class TempFormComponent implements OnInit {
  onSubmit = (userForm: NgForm) => {
    console.log(userForm);
    console.log(userForm.value);
  };

  cities: string[] = [
    'ahmedabad',
    'pune',
    'bbsr',
    'mumbai',
    'agartala',
    'puri',
  ];

  @ViewChild('userForm') userForm!: NgForm;

  resetForm = (userForm: NgForm) => {
    userForm.reset();
  };

  resetUserForm = () => {
    this.userForm.reset();
  };

  constructor() {}

  ngOnInit(): void {}
}
