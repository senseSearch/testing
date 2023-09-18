import { Component, OnInit } from '@angular/core';
import {
  state,
  trigger,
  style,
  animate,
  transition,
} from '@angular/animations';


@Component({
  selector: 'app-btn-transition',
  templateUrl: './btn-transition.component.html',
  styleUrls: ['./btn-transition.component.scss'],
  animations: [
    //...example   Note that this example doesn't need to use state().
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('1s', style({ opacity: 0 }))
      ])
    ]),

    //... example 
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate('1s ease-in-out')
      ]),
      transition('* => void', [
        animate('1s ease-in-out', style({
          transform: 'translateX(100%)'
        }))
      ])
    ]),

    //...
    trigger('openClosed', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'red'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open <=> closed', [
        animate('150ms ease-in-out')
      ])
      /* 
      transition('* => closed', [
        animate('300ms ease-in-out')
      ]),
      transition('* => open', [
        animate(200)
      ]) */
    ])
  ]
})

export class BtnTransitionComponent implements OnInit {

  isOpen = true;

  constructor() { }

  toggle() {
    this.isOpen = !this.isOpen;
  }


  ngOnInit(): void {
  }

}
