import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalaService {

  private baseUrl = 'http://localhost:8080/salas';

  constructor(private http: HttpClient) { }

  buscarSala(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  listarSalas(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  criarSala(sala: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, sala);
  }

  atualizarSala(id: number, sala: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, sala);
  }

  apagarSala(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}
