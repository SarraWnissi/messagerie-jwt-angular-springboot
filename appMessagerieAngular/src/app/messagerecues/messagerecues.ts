import { Component } from '@angular/core';
import { Gestion } from '../gestion';

@Component({
  selector: 'app-messagerecues',
  standalone: false,
  templateUrl: './messagerecues.html',
  styleUrls: ['./messagerecues.css'],
})
export class Messagerecues {
  messages: any = [];
  constructor(private serv: Gestion) {
    this.getMessages();
  }
  getMessages() {
    this.serv.getmessagerecus().subscribe({
      next: (data) => {
        this.messages = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
