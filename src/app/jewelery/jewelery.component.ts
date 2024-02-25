import { Component, inject } from '@angular/core';
import { ApiService } from '../api.service';
import { DataProductsComponent } from '../data-products/data-products.component';
import { Store } from '@ngrx/store';
import { ProductsModel } from '../shared/store/user.model'

@Component({
  selector: 'Jewelery',
  standalone: true,
  imports: [
    DataProductsComponent
  ],
  templateUrl: './jewelery.component.html',
  styleUrl: './jewelery.component.css'
})
export class JeweleryComponent {
  constructor(private store: Store<{ products: [] }>) {
      // Inyectar el Store de NgRx para manejar el estado de la aplicación

  }
  public apiService = inject(ApiService)
  products= [{category: ''}] // Inicializar el array de productos con un objeto vacío
 
 
  ngOnInit(): void {
   // Método que se ejecuta cuando el componente se inicializa
    this.store.select('products').subscribe((data: ProductsModel[]) => {
     // Seleccionar el estado de 'products' del Store y suscribirse a sus cambios
      this.products = data.filter((res) => res.category === 'jewelery')
      // Filtrar los productos por categoría 'jewelery' y asignarlos al array 'products'
     
    })
  
  
  }
}
