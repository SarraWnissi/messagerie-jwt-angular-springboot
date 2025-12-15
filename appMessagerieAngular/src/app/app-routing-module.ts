import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './login/login';
import { Messageenvoyes } from './messageenvoyes/messageenvoyes';
import { Layout } from './layout/layout';
import { Auth } from './auth';
import { Messagerecues } from './messagerecues/messagerecues';
import { Send } from './send/send';

const routes: Routes = [
  { path: 'login', component: Login },
  {
    path: '',
    component: Layout,
    canActivate: [Auth],
    children: [
      { path: 'msgrecus', component: Messagerecues },
      { path: 'msgenvoyer', component: Messageenvoyes },
      { path: 'send', component: Send },
    ],
  },
  { path: '', component: Login },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
