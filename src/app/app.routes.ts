
import { Routes } from '@angular/router';
import { MemberForm } from './member-form-component/member-form-component';
import { Member } from './member/member';
import { Dashboard } from './dashboard/dashboard';
import { Tool } from './tool/tool';
import { Event } from './event/event';
import { Article } from './article/article';
import { Login } from './login/login';
import { Template } from './template/template';
import { AuthService } from '../Services/auth-service';
import { inject } from '@angular/core';

export const routes: Routes = [
  {
    path: 'login',
    component: Login
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: Template,
    children: [
      {
        path: 'create-member',
        component: MemberForm,
        canActivate: [
          () => inject(AuthService).isAuthenticated()
        ]
      },
      {
        path: 'member',
        component: Member
      },
      {
        path: ':id/edit-member',
        component: MemberForm
      },
      {
        path: 'dashboard',
        component: Dashboard
      },
      {
        path: 'tool',
        component: Tool
      },
      {
        path: 'event',
        component: Event
      },
      {
        path: 'article',
        component: Article
      }
    ]
  }
];
