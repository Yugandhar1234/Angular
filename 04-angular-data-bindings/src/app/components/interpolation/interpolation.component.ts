import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  public cardHeader:string = "Interpolation";
  public message:string = "Good Afternoon";
  public currentTime:string = new Date().toLocaleTimeString();

  public displayDate():string{
    return new Date().toLocaleDateString();
  }

  public displayTime():string{
    return  new Date().toLocaleTimeString();
  }

  public displayCurrentTime():string{
    setInterval(() => {
      this.currentTime = new Date().toLocaleTimeString();
    } , 1000);
    return this.currentTime;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
