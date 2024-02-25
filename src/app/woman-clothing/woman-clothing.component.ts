import { Component, inject } from '@angular/core';
import { DataProductsComponent } from '../data-products/data-products.component';
import { ApiService } from '../api.service';
import { Store } from '@ngrx/store';
import {ProductsModel} from '../shared/store/user.model'


@Component({
  selector: 'app-woman-clothing',
  standalone: true,
  imports: [
    DataProductsComponent
  ],
  templateUrl: './woman-clothing.component.html',
  styleUrl: './woman-clothing.component.css'
})
export class WomanClothingComponent {
  constructor(private store: Store<{products:[]}>) {

  }
  public apiService = inject(ApiService)
   products!: ProductsModel[]
   ngOnInit(): void {
    this.store.select('products').subscribe((data:ProductsModel[]) => {
      this.products = data.filter((res) => res.category === "women's clothing")
    })
  
  }
}
