import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  public inputType:string = "password";

  public updateInput(){
    this.inputType = (this.inputType === 'password') ? 'text' : 'password';

   /* if(this.inputType === 'password'){
      this.inputType = 'text';
    }
    else{
      this.inputType = 'password';
    }*/
  }

  constructor() { }

  ngOnInit(): void {
  }

}
