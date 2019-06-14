import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formModel = {
    UserName: '',
    Password: ''
  }
  constructor() { }

  ngOnInit() {
  }

  loginUser(event){
    event.preventDefault();
    console.log(this.formModel.UserName)
    console.log(this.formModel.Password)
    

  }

}
