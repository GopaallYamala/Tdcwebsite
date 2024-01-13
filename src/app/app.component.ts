import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
    <h1>Product List</h1>
<div *ngFor="let product of products$ | async">
  <div>
    <p>ID: {{ product.id }}</p>
    <p>Title: {{ product.attributes.Title }}</p>
    <p>Created At: {{ product.attributes.createdAt | date:'medium' }}</p>
    <p>Updated At: {{ product.attributes.updatedAt | date:'medium' }}</p>
    <p>Published At: {{ product.attributes.publishedAt | date:'medium' }}</p>
  </div>
  <hr />
</div>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  products$!: Observable<any>;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.products$ = this.apiService.getProducts().pipe(
      map(response => response.data)
    );
  }
}
