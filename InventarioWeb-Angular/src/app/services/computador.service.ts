import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Computador {
  id?: number;
  usuario: string;
  processador: string;
  sistemaOperacional: string;
  ram: number;
  dataCadastro: string; //yyyy-MM-dd - ajustado no html
}

@Injectable({
  providedIn: 'root'
})
export class ComputadorService {

  private apiUrl = 'http://localhost:8080/api/computadores';

  constructor(private http: HttpClient) {}

  listar(): Observable<Computador[]> {
    return this.http.get<Computador[]>(this.apiUrl);
  }

  buscarPorId(id: number): Observable<Computador> {
    return this.http.get<Computador>(`${this.apiUrl}/${id}`);
  }

  criar(computador: Computador): Observable<Computador> {
    return this.http.post<Computador>(this.apiUrl, computador);
  }

  atualizar(id: number, computador: Computador): Observable<Computador> {
    return this.http.put<Computador>(`${this.apiUrl}/${id}`, computador);
  }

  excluir(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
