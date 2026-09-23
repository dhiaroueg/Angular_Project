import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Member } from '../../Model/Member';

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
  GetAllMembers(): Observable<Member[]> {
    // code pour envoyer une requete http get vers le backend
    return this.http.get<Member[]>('http://localhost:3000/members');
  }
}

