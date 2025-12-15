import { Component } from '@angular/core';
import { Gestion } from '../gestion';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  response: any = {};
  constructor(private service: Gestion, private route: Router) {}
  connexion(request: any) {
    this.service.connexion(request).subscribe({
      next: (data: any) => {
        this.response = data;
        localStorage.setItem('token', this.response.token); //recupere token

        let help = new JwtHelperService();
        let id = help.decodeToken(this.response.token).iduser; //ouvrir token et recupere data dedans
        localStorage.setItem('iduser', id);
        this.route.navigate(['/msgrecus']);
      },
    });
  }
}
