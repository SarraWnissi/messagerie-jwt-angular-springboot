import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Gestion {
  hrd: any;
  iduser: number = 0;

  constructor(private http: HttpClient) {
    this.hrd = new HttpHeaders({ authorization: localStorage.getItem('token') || '' }); //cnx
    this.iduser = parseInt(localStorage.getItem('iduser') || '');
  }

  getUser() {
    return this.http.get('http://localhost:8080/messagerie/utilisateurs', { headers: this.hrd }); //authorization
  }

  getmessagerecus() {
    return this.http.get('http://localhost:8080/messagerie/messagesrecus/' + this.iduser, {
      headers: this.hrd,
    });
  }
  getmessageenvoyer() {
    return this.http.get('http://localhost:8080/messagerie/messagesenvoyes/' + this.iduser, {
      headers: this.hrd,
    });
  }

  sendmessage(msg: any) {
    return this.http.post('http://localhost:8080/messagerie/addMessage', msg, {
      headers: this.hrd,
    });
  }

  deletemessage(id: number) {
    this.http.delete('http://localhost:8080/messagerie/delMessage' + id, { headers: this.hrd });
  }

  connexion(request: any) {
    return this.http.post('http://localhost:8080/auth/login', request);
  }
}
