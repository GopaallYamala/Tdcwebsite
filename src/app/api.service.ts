import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://strapicms2024-v1.onrender.com/api/products?populate=*';
  private apiToken = '0c1061fbd548b6efce625afe6156ddea4098b28dd891c2b9862dd12974d599b90fab6362b4994bc793aa81221f6d5633e57565c4c04575ba3e824c1867b909d3408a350396e3284de48fbee5fc0b0b6d014e8ece6a9bc403d02f663b0e28d78c658f3fed490f4f96a19c3b3fc64386250c3f7fe66e4be44b21bb2b3f349ac246'; // Replace with your actual API token

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.apiToken}`);
    return this.http.get(this.apiUrl, { headers });
  }
}

