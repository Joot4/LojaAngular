import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produtos } from '../produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  // Injeção de dependencias

  private baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

   getProdutos(): Observable<Produtos[]>{
    return this.http.get<Produtos[]>(`${this.baseUrl}produtos`)
   }

   getProdutoId(id: string): Observable<Produtos>{
    return this.http.get<Produtos>(`${this.baseUrl}produtos/${id}`)
   }


   atualizarProduto(produto: Produtos): Observable<any>{
    return this.http.put(`${this.baseUrl}produtos/${produto.id}`, produto)
   }

}
