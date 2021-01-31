import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stop-watch',
  templateUrl: './stop-watch.component.html',
  styleUrls: ['./stop-watch.component.css']
})
export class StopWatchComponent implements OnInit {

  public timer:number = 0;
  public minutes:number = 0;
  public seconds:number = 0;
  public milliSeconds:number = 0;
  public timerRunning:boolean = false;
  public timerId:number = 0;

  public start():void{
    if(!this.timerRunning){
      this.timerId = setInterval(() => {
        this.timer++;
        this.minutes = Math.floor((this.timer/100)/60);
        this.seconds = Math.floor((this.timer/100) - (this.minutes * 60));
        this.milliSeconds = Math.floor(this.timer- (this.seconds * 100) - (this.minutes * 6000));
      } , 10);
      this.timerRunning = true;
    }
  }

  public stop():void{
    clearInterval(this.timerId);
    this.timerRunning = false;
  }

  public reset():void{
    clearInterval(this.timerId);
    this.timerRunning = false;
    this.timer = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.milliSeconds = 0;
    this.timerId = 0;
  }

  public leadingZero(time){
    return (time <= 9)? "0" + time : time;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
