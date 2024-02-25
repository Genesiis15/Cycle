import { Component, inject } from '@angular/core';
import { DataProductsComponent } from '../data-products/data-products.component';
import { ApiService } from '../api.service';
import { Store } from '@ngrx/store';
import {ProductsModel} from '../shared/store/user.model'

@Component({
  selector: 'Products',
  standalone: true,
  imports: [
    DataProductsComponent,
    
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
 constructor(private store: Store<{products:[]}>) {

  }
  public apiService = inject(ApiService)
  products!: ProductsModel[]
   ngOnInit(): void {
    this.store.select('products').subscribe(data => {
      this.products = data
    })
  
  }
}
