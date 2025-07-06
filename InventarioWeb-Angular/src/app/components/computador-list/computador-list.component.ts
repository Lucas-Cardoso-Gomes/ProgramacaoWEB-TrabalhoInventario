// src/app/components/computador-list/computador-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Computador, ComputadorService } from '../../services/computador.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-computador-list',
  templateUrl: './computador-list.component.html',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class ComputadorListComponent implements OnInit {

  computadores: Computador[] = [];

  constructor(private service: ComputadorService, private router: Router) {}

  ngOnInit(): void {
  this.service.listar().subscribe(data => {
    this.computadores = data.sort((a, b) => (a.id ?? 0) - (b.id ?? 0));
  });
}


  carregarComputadores(): void {
    this.service.listar().subscribe(data => this.computadores = data);
  }

  editar(id: number): void {
    this.router.navigate(['/computadores/editar', id]);
  }

excluir(id: number): void {
  Swal.fire({
    title: 'Tem certeza?',
    text: 'Esta ação não poderá ser desfeita!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sim, excluir',
    cancelButtonText: 'Cancelar',
    confirmButtonColor: '#dc3545'
  }).then(result => {
    if (result.isConfirmed) {
      this.service.excluir(id).subscribe(() => {
        this.ngOnInit(); // atualiza a lista
        Swal.fire('Excluído!', 'O registro foi removido.', 'success');
      });
    }
  });
}

  novo(): void {
    this.router.navigate(['/computadores/novo']);
  }
}
