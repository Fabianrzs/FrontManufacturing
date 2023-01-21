import { Observable } from 'rxjs';
import { Product } from '../models/Product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: string = "";
  constructor(private http: HttpClient) { this.baseUrl = environment.baseUrl; }

  MarkFaulty(id: string | undefined): Observable<any> {
    const url = `${this.baseUrl}api/Product/MarkFaulty?id=${id}`;
    return this.http.patch<string>(url,
      { responseType: 'text' });
  }

  MarkOutlet(id: string | undefined): Observable<any> {
    const url = `${this.baseUrl}api/Product/MarkOutlet?id=${id}`;
    return this.http.patch<any>(url,
      { responseType: 'text' });
  }

  Consult(state: number): Observable<Product[]> {
    const url = `${this.baseUrl + 'api/Product'}/${state}`;
    return this.http.get<Product[]>(url, httpOptions);
  }

  Incoming(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl + 'api/Product', product, httpOptions);
  }
}