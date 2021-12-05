import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transferencia } from '../models/transferencia.model';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencia: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpCliente: HttpClient) {
    this.listaTransferencia = [];
  }
  
  get transferencias() {
    return this.listaTransferencia;
  }

  GetTodasTransferencias(): Observable<Transferencia[]> {
    // vai retornar uma lista de transferencia
    return this.httpCliente.get<Transferencia[]>(this.url);
  }

  adicionarTransferencia(transferencia: Transferencia): Observable<Transferencia> {
    this.hidratar(transferencia);
    
    return this.httpCliente.post<Transferencia>(this.url, transferencia);
  }

  private hidratar(transferencia: any) {
    transferencia.data = new Date();
  }
}
