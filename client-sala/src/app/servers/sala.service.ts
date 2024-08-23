import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sala } from 'src/app/sala'; 

@Injectable({
  providedIn: 'root'
})
export class SalaService {

  private baseUrl = 'http://localhost:8080/sala';

  constructor(private http: HttpClient) { }

  buscarSala(id: number): Observable<Sala> {
    return this.http.get<Sala>(`${this.baseUrl}/${id}`);
  }

  listarSalas(): Observable<Sala[]> {
    return this.http.get<Sala[]>(`${this.baseUrl}`);
  }

  criarSala(sala: Sala): Observable<Sala> {
    return this.http.post<Sala>(`${this.baseUrl}`, sala);
  }

  atualizarSala(id: number, sala: Sala): Observable<Sala> {
    return this.http.put<Sala>(`${this.baseUrl}/${id}`, sala);
  }

  apagarSala(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}
