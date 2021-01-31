import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {UserNameValidator} from './validators/UserNameValidator';
import {UserService} from '../../services/user.service';
import {UserEnroll} from '../../models/UserEnroll';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public message:string;
  public isEmpty:boolean;
  public isSubmitted:boolean;
  public courses:string[] = ['Angular' , 'React JS' , 'Node JS' , 'Ionic'];
  constructor(private formBuilder:FormBuilder,
              private userService:UserService) { }

  public registrationForm = this.formBuilder.group({
    username : ['', [UserNameValidator.noSpecialCharacters]],
    email : ['', [Validators.required, Validators.email]],
    password : ['', [Validators.required, Validators.minLength(5)]],
    course : ['', [Validators.required]]
  });

  ngOnInit(): void {
  }

  public getUserName(){
    return this.registrationForm.get('username');
  }

  public getEmail(){
    return this.registrationForm.get('email');
  }

  public getPassword(){
    return this.registrationForm.get('password');
  }

  public getCourse(){
    return this.registrationForm.get('course');
  }

  // submitRegister
  public submitRegister(){
    let user:UserEnroll = {
      name : this.getUserName().value,
      email : this.getEmail().value,
      password : this.getPassword().value,
      course : this.getCourse().value
    };
    if(user.name !== '' && user.email !== '' && user.password !== '' && user.course !== ''){
      this.isEmpty = false;
      this.userService.register(user).subscribe((data) => {
          this.message = data.msg;
          this.isSubmitted = true;
      });
    }
    else{
      this.isEmpty = true;
      this.isSubmitted = false;
    }
  }
}
