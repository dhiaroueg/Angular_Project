
import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MemberService } from '../../Services/member-service';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { Member as MemberModel } from '../../Model/Member';
import { ConfirmComp } from '../confirm-comp/confirm-comp';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-member',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './member.html',
  styleUrl: './member.css',
})
export class Member implements OnInit {
  dataSource: MemberModel[] = [];

  displayedColumns: string[] = [
    'id',
    'name',
    'cin',
    'Type',
    'createdDate',
    'actions'
  ];

  // injection de depandance = mecanisme qui permet de fournir les dependances d'une classe depuis l'exterieur

  // le service est injecté dans le composant via le constructeur
  constructor(
    private MS: MemberService,
    private dialogService: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadMembers();
  }

  private loadMembers(): void {
    this.MS.GetAllMembers().subscribe((response) => {
      this.dataSource = response ?? [];
    });
  }

  deleteMember(id: string): void {
    // ouvrir la boite
    const dialogRef = this.dialogService.open(ConfirmComp);

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.MS.DeleteMember(id).subscribe(() => {
          this.loadMembers();
        });
      }
    });
  }
}
