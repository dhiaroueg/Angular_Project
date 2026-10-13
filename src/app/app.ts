import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { Template } from './template/template';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, Template],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  constructor(private router: Router) {}

  b: boolean = false;

  ngOnInit(): void {
    this.b = this.router.url !== '/login';
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.b = this.router.url !== '/login';
    });
  }
}

