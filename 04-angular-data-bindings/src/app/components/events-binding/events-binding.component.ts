import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-binding',
  templateUrl: './events-binding.component.html',
  styleUrls: ['./events-binding.component.css']
})
export class EventsBindingComponent implements OnInit {

  public message:string = "Hello";
  public counter:number = 0;
  public interval:number = 0;
  public timerRunning:boolean = false;

  public sayGoodMorning():void{
    this.message = "Good Morning";
  }

  public sayGoodAfternoon():void{
    this.message = "Good Afternoon";
  }

  public sayGoodEvening():void{
    this.message = "Good Evening";
  }

  /*
    Counter Methods
   */
  public start():void{
      if(!this.timerRunning){
        this.interval = setInterval(() => {
          this.counter = this.counter + 1;
        } , 50);
        this.timerRunning = true;
      }
  }

  public stop():void{
    clearInterval(this.interval);
    this.timerRunning = false;
  }

  public reset():void{
    this.counter = 0;
    this.timerRunning = false;
  }









  constructor() { }

  ngOnInit(): void {
  }

}
