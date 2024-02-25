import { HttpClient } from '@angular/common/http';
import { Injectable, computed, signal } from '@angular/core';
import { loadProducts } from './shared/store/products.actions';
import { Store } from '@ngrx/store';
@Injectable({
  providedIn: 'root'
})
export class ApiService  {
  private apiUrl = 'https://fakestoreapi.com'; 
  #data = signal<any[]>([])
 
  // Computed property que devuelve los productos
  public products = computed(() => this.#data())

  constructor(private http: HttpClient, private store: Store) {
    // Realizar una solicitud GET a la API para obtener los productos
    this.http.get<any[]>(`${this.apiUrl}/products`).subscribe(res => {
      // Actualizar la variable privada #data con la respuesta de la API
      this.#data.set(res)
        // Despachar la acción loadProducts con los productos obtenidos para actualizar el store
      this.store.dispatch(loadProducts({products:res}))
    
    })
  }

}