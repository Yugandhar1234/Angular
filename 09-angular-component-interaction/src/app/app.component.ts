import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public wishMessage:string;

  public employee:any = {
    name : 'Rajan',
    age : 25,
    designation : 'Software Engineer'
  };
}
