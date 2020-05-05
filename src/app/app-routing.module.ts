import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PasswordChangeComponent} from './password-change/password-change.component';

const routes: Routes = [
  { path: 'auth/password-change/:token', component: PasswordChangeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
