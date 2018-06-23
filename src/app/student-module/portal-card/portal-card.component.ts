import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-portal-card',
  templateUrl: './portal-card.component.html',
  styleUrls: ['./portal-card.component.scss'],
  animations: [
    trigger('animationState', [
      state('in', style({ transform: 'translateY(0)', opacity: '1' })),
      transition('void => *', [
        style({ transform: 'translateY(30%)', opacity: '0' }),
        animate('300ms ease-out')
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class PortalCardComponent implements OnInit {

  @Input()
  public title: string;

  @Input()
  public subtitle: string;

  public animationState: string;

  constructor() { }

  ngOnInit() {
    this.animationState = 'in';
  }

}
