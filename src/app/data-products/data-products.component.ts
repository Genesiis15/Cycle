import { Component, Input, inject, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import 'primeng'
import { TableModule } from 'primeng/table';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { CardProductComponent } from '../card-product/card-product.component';
import { GroupCardComponent } from '../group-card/group-card.component';
import { FilterComponent } from '../filter/filter.component';
import { Store } from '@ngrx/store';
import { deleteProduct } from '../shared/store/products.actions';

@Component({
  selector: 'DataProducts',
  standalone: true,
  imports: [
    ButtonModule,
    GroupCardComponent,
    FilterComponent,
    TableModule,
    DataViewModule,
    RatingModule,
    FormsModule,
    TagModule,
    CommonModule,
    CardProductComponent
  ], 
  templateUrl: './data-products.component.html',
  styleUrl: './data-products.component.css'
})
 
export class DataProductsComponent{
    constructor(private store: Store) {
      this.products = []
      this.type = null
  }

  layout: 'list' | 'grid' = 'list';
    @Input() products: any[] = [];
    @Input() type: 'jewelery' | null;
   getSeverity(item: any) {
    return item.inventoryStatus === 'INSTOCK' ? 'success' : 'danger';
  }
    handleProduct(id:string) {
   this.store.dispatch(deleteProduct({productId: id}))
  }
}
