import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  templateUrl: 'animations.component.html',
  styles: [`
        p {
            width:200px;
            background:lightgray;
            margin:100px auto;
            text-align:center;
            padding:20px;
            font-size:1.5em;
        }
`],
  animations: [
      trigger('myAwesomeAnimation', [
          state('small', style( {
            transform: 'scale(1)',
          })),
          state('large', style({
            transform: 'scale(1.2)',
          })),

          transition('small <=> large', animate('300ms ease-in', keyframes([
                style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
                style({opacity: 1, transform: 'translateY(35px)', offset: .5}),
                style({opacity: 1, transform: 'translateY(0)', offset: 1}),
              ]))),
      ])
  ]
})
export class AnimationsComponent {

  public brandPrimary = '#20a8d8';
  public brandSuccess = '#4dbd74';
  public brandInfo = '#63c2de';
  public brandWarning = '#f8cb00';
  public brandDanger = '#f86c6b';

  state: string = 'small';

  private items = [{
    name: 'Blup',
    description: 'Nemo says blup'
  },{
    name: 'FooBar',
    description: 'foobar is awesome'
  }]

  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }
}
