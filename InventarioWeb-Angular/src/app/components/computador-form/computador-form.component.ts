import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';

import { ComputadorService } from '../../services/computador.service';

@Component({
  selector: 'app-computador-form',
  templateUrl: './computador-form.component.html',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
  ]
})
export class ComputadorFormComponent implements OnInit {

  form!: FormGroup;
  id?: number;
  isEdit = false;

  constructor(
    private fb: FormBuilder,
    private service: ComputadorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      usuario: ['', [Validators.required]],
      processador: ['', [Validators.required]],
      sistemaOperacional: ['',[Validators.required]],
      ram: [1, [Validators.required, Validators.min(1)]],
      dataCadastro: ['', Validators.required]
    });

    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.isEdit = !!this.id;

    if (this.isEdit) {
      this.service.buscarPorId(this.id!).subscribe((data) => this.form.patchValue(data));
    }
  }

  salvar(): void {
    if (this.form.invalid) return;

    const computador = this.form.value;

    if (this.isEdit) {
      this.service.atualizar(this.id!, computador).subscribe(() => this.router.navigate(['/']));
    } else {
      this.service.criar(computador).subscribe(() => this.router.navigate(['/']));
    }
  }

  cancelar(): void {
    this.router.navigate(['/']);
  }
}
