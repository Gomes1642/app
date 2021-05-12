import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'home', icon: 'home'},
    { title: 'Botões', url: 'botao', icon: 'tablet-landscape' },
    { title: 'Alerta', url: 'alerta', icon: 'alert'},
    { title: 'Action sheet', url: 'actionsheet', icon: 'construct' },
    { title: 'Badge' , url: 'badge' , icon: 'construct'},
    { title: 'Card' , url: 'card' , icon: 'construct'},
    { title: 'CheckBox' , url: 'checkbox' , icon: 'construct'},
    { title: 'Content' , url: 'content' , icon: 'construct'},
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
