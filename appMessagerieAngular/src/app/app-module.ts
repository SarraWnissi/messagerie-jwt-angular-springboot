import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Layout } from './layout/layout';
import { Messageenvoyes } from './messageenvoyes/messageenvoyes';
import { Send } from './send/send';
import { Messagerecues } from './messagerecues/messagerecues';
import { Login } from './login/login';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [App, Layout, Messageenvoyes, Send, Messagerecues, Login],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient()],
  bootstrap: [App],
})
export class AppModule {}
