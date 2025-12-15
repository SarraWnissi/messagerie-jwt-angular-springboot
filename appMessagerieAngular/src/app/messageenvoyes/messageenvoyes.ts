import { Component } from '@angular/core';
import { Gestion } from '../gestion';

@Component({
  selector: 'app-messageenvoyes',
  standalone: false,
  templateUrl: './messageenvoyes.html',
  styleUrl: './messageenvoyes.css',
})
export class Messageenvoyes {
  messages: any = [];
  constructor(private serv: Gestion) {
    this.getMessages();
  }
  getMessages() {
    this.serv.getmessageenvoyer().subscribe({
      next: (data) => {
        this.messages = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
