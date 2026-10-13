
import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthService } from '../../Services/auth-service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(
    private AS: AuthService,
    private router: Router
  ) {}

  email: string = '';
  password: string = '';

  login(): void {
    if (!this.email || !this.password) {
      console.log('Email et password obligatoires');
      return;
    }

    // Vérifier que l'email contient au moins @
    if (!this.email.includes('@')) {
      console.log('Email invalide');
      return;
    }

    //appeler  le service AuthService pour authentifier l'utilisateur
    this.AS.signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
        this.router.navigate(['/member']);
      })
      .catch((error) => {
        console.log('Erreur Firebase :', error);
      });
  }
}
