import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  public inputType: string = 'text';
  public data: string;
  public bgColor: string;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * changeBackgroundColor
   */
  public changeBackgroundColor(color: string) {
    this.bgColor = color;
  }

}
