import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: string;
  email: string;
  password: string;
  confirmPassword: string;

  constructor() { }

  ngOnInit(): void {}

  register(){
    console.log(this.user);
    console.log(this.email);
    console.log(this.password);
    console.log(this.confirmPassword);

  }

}
