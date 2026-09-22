import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
// decorateuer qi permer  de declarer
// que  le service accept l'injection
// dans un composant ou dans un autre service
export class MemberService {
  constructor(private http: HttpClient) {}
  //fonctions qui envoient des requetes http vers le backend
  // (get, post, put, delete, patch)
  GetAllMembers() {
    // code pour envoyer une requete http get vers le backend
    return this.http.get<any[]>('http://localhost:3000/members');
  }
}

