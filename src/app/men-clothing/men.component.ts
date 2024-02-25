import { Component, inject } from '@angular/core';
import { ApiService } from '../api.service';
import { DataProductsComponent } from '../data-products/data-products.component';
import { Store } from '@ngrx/store';
import {ProductsModel} from '../shared/store/user.model'


@Component({
  selector: 'mens-clothing',
  standalone: true,
  imports: [
    DataProductsComponent
  ],
  templateUrl: './men.component.html',
  styleUrl: './men.component.css'
})
export class MensClothingComponent {
   constructor(private store: Store<{products:[]}>) {

  }
  // Inyecta ApiService para interactuar con la API
  public apiService = inject(ApiService)
  products!: ProductsModel[]
   ngOnInit(): void {
     this.store.select('products').subscribe((data: ProductsModel[]) => {
       this.products = data.filter((res) => res.category === "men's clothing")
    })
  
  
  }
}
