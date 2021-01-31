import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-ref',
  templateUrl: './template-ref.component.html',
  styleUrls: ['./template-ref.component.css']
})
export class TemplateRefComponent implements OnInit {

  public message:string = "";

  public sendText(elem:HTMLParagraphElement):void{
    this.message = elem.innerText;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
