import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MemberService } from '../app/Services/member-service';


@Component({
  selector: 'app-member',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './member.html',
  styleUrl: './member.css',
})
export class Member implements OnInit {
  dataSource: any[] = [];
  displayedColumns: string[] = ['id', 'name', 'cin', 'type', 'createdDate'];

  // injection de depandance = mecanisme qui permet de fournir les dependances d'une classe depuis l'exterieur
  // le service est injecté dans le composant via le constructeur
  constructor(private MS: MemberService) {}

  ngOnInit(): void {
    this.MS.GetAllMembers().subscribe((response) => {
      this.dataSource = response ?? [];
    });
  }
}

