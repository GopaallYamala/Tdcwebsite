import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://strapicms2024-v3-vz7tr.ondigitalocean.app/api/products?populate=*';
  private apiToken = 'ebf9835b058d7e10f7de3b339b3c8f16a953f525a2bea9a7539b51ea5231844113060c15e4fc9c0bcfa560b394d680fa284520d7419294918899cf4832aa415c90cb0dcfe5b22c874960523abe34ef00d12e5c31f1bf0e50b1ce192cc915ad5cf4519256e08c3a15c5f69d3565a917165634af2158efce03e7d6985b27003dc5'; // Replace with your actual API token

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.apiToken}`);
    return this.http.get(this.apiUrl, { headers });
  }
}

