import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginGuard } from './core/guards/login.guard';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
  },
  {
    path: '',
    component: AppComponent,
    canActivate: [LoginGuard],
    canActivateChild: [LoginGuard],
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
