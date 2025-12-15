import { Component } from '@angular/core';
import { Gestion } from '../gestion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-send',
  standalone: false,
  templateUrl: './send.html',
  styleUrl: './send.css',
})
export class Send {
  users: any = [];
  message: any = { id: 0, sujet: '', contenu: '', usersend: { id: 1 }, userreceive: null, etat: 1 };
  constructor(private gest: Gestion, private route: Router) {
    this.getUsers();
  }

  send() {
    // relier avec submit du html
    this.message.usersend.id = parseInt(localStorage.getItem('iduser') || '0');
    this.gest.sendmessage(this.message).subscribe({
      next: (data) => {
        console.log(data);
        this.route.navigate(['/msgenvoyer']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getUsers() {
    this.gest.getUser().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
