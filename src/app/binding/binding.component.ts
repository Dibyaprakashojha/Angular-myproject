import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css'],
})
export class BindingComponent implements OnInit {
  message = 'This is a demo';
  employee = {
    name: 'Dibya',
    city: 'BBSR',
  };

  mylogo =
    '/assets/images/marvel-villains-laptop android-iphone-desktop-hd-backgrounds-wallpapers-1080p-4k-16tjy.jpg';

  buttonStatus = false;

  show = () => {
    this.message = `Message Changed ${this.username}`;
  };

  greetUser = (uname: string) => {
    this.message = `Good Day ${uname}`;
  };

  headerClass = 'header';
  footerClass = 'footer';
  applyClass = true;
  headerText = 'lowercase';
  headerColor = 'orange';
  username = 'Prakash';

  nmessage: string = 'Holaa Guys!!!';
  greetCustomer = (cusName: string) => {
    this.nmessage = `Good Day ${cusName}`;
  };

  constructor() {}

  ngOnInit(): void {}
}
