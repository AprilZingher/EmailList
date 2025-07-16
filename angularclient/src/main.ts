// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { App } from './app/app';
import { UserList } from './app/user-list/user-list';
import { UserForm } from './app/user-form/user-form';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';

bootstrapApplication(App, {
  providers: [
    provideRouter([
      { path: '', redirectTo: 'users', pathMatch: 'full' },
      { path: 'users', component: UserList },
      { path: 'adduser', component: UserForm },
    ]),
    provideHttpClient(),
    importProvidersFrom(FormsModule)
  ]
});
