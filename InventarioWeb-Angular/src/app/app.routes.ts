import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComputadorListComponent } from './components/computador-list/computador-list.component';
import { ComputadorFormComponent } from './components/computador-form/computador-form.component';

export const routes: Routes = [
  { path: '', component: ComputadorListComponent },
  { path: 'computadores/novo', component: ComputadorFormComponent },
  { path: 'computadores/editar/:id', component: ComputadorFormComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}