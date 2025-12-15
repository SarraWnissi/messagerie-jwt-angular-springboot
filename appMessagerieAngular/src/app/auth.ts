import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  constructor(private route: Router) {}
  canActivate() {
    //tester toker existe ds localstorage ou non
    let token = localStorage.getItem('token');
    if (token) {
      return true;
    } else {
      this.route.navigate(['/login']);
      return false;
    }
  }
}
