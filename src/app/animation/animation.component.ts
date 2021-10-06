import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations:[
    trigger('openClose',[
      state('open',style({
        height:'500px',
        backgroundColor:'red'
      })),
      state('close',style({
        height:'500px',
        backgroundColor:'green'
      })),
     transition('open=>close',[
       animate('1s')
     ]),
     transition('close=>open',[
       animate('2s')
     ])
  ])
]
})
export class AnimationComponent implements OnInit {

  constructor() { }
  isOpen=true;
  ngOnInit(): void {
  }
  toggle()
  {
    this.isOpen=!this.isOpen
  }
}
