import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Endereco} from "../modelo/Endereco";

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {
  private apiUrl = 'http://localhost:8080/enderecos/'
  constructor(private http:  HttpClient) {}
  getEnderecos(): Observable<Endereco[]>{
    return this.http.get<Endereco[]>(this.apiUrl).pipe(
      map((response:any) => response.content)
    );
  }
  deleteEnderecos(endereco: Endereco): Observable<Endereco>{
    return this.http.delete<Endereco>(`${this.apiUrl}/${endereco.id}`);
  }
}
