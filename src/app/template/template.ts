
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../Services/auth-service';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './template.html',
  styleUrl: './template.css',
})
export class Template {
  constructor(
    private As: AuthService,
    private router: Router
  ) {}

  async logout(): Promise<void> {
    try {
      await this.As.signOut();
      await this.router.navigate(['/login']);
    } catch (error) {
      console.error('Échec de la déconnexion :', error);
    }
  }
}
