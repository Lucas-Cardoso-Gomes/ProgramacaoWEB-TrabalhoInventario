import { AppComponent } from './app.component';
import { ComputadorListComponent } from './components/computador-list/computador-list.component';
import { ComputadorFormComponent } from './components/computador-form/computador-form.component';

import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter([
      { path: '', component: ComputadorListComponent },
      { path: 'computadores/novo', component: ComputadorFormComponent },
      { path: 'computadores/editar/:id', component: ComputadorFormComponent },
      { path: '**', redirectTo: '' }
    ])
  ]
};
