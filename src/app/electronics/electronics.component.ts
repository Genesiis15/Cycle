import { Component, inject } from '@angular/core';
import { ApiService } from '../api.service';
import { DataProductsComponent } from '../data-products/data-products.component';
import { Store } from '@ngrx/store';
import {ProductsModel} from '../shared/store/user.model'

@Component({
  selector: 'Electronics',
  standalone: true,
  imports: [
    DataProductsComponent
  ],
  templateUrl: './electronics.component.html',
  styleUrl: './electronics.component.css'
})
export class ElectronicsComponent {
 constructor(private store: Store<{products:[]}>) {

  }
  public apiService = inject(ApiService)
  products!: ProductsModel[]
   ngOnInit(): void {
    this.store.select('products').subscribe((data:ProductsModel[]) => {
      this.products = data.filter((res) => res.category === 'electronics')
    })
  
  }
}
