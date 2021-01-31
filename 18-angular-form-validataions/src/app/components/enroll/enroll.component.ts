import { Component, OnInit } from '@angular/core';
import {UserEnroll} from '../../models/UserEnroll';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})
export class EnrollComponent implements OnInit {

  public user:UserEnroll = {
    name : '',
    email : '',
    password : '',
    course : ''
  };
  public courses:string[] = ['Angular' , 'React JS' , 'Node JS' , 'Ionic' , 'React Native'];
  public isEmpty:boolean;
  public isSubmitted:boolean;
  public message:string;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  //submitEnroll
  public submitEnroll(){
    if(this.user.name !== '' && this.user.email !== '' && this.user.password !== '' && this.user.course !== ''){
        this.isEmpty = false;
        this.userService.enroll(this.user).subscribe((data) => {
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
