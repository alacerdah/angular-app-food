import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { NotificationService } from '../notification.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'mt-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations: [
    trigger('snack-visibility', [
      state('hidden',style({
        opacity:0,
        bottom: '0px'
      })),
      state('visible',style({
        opacity: 1,
        bottom: '30px'
      })),
      transition('hidden => visible', animate('500ms 0s ease-in')),
      transition('visible => hidden', animate('500ms 0s ease-out'))
    ])
  ]
})
export class SnackbarComponent implements OnInit{
  
  messages: string;
  snackVisibility: string = 'hidden'

  constructor(private service: NotificationService) { }

  ngOnInit() {
    this.service.notifier
      .do(m =>{
        this.messages = m;
        this.snackVisibility = 'visible';        
      })
      .switchMap(m => 
        Observable.timer(3000)
      )
      .subscribe(
        t => this.snackVisibility = 'hidden'
      )
  }

}
