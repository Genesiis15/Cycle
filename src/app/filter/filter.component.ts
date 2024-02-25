import { Component, inject,SimpleChanges, OnChanges } from '@angular/core';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { ToolbarModule } from 'primeng/toolbar';
import { CommonModule } from '@angular/common';
import 'primeng'
import { TableModule } from 'primeng/table';
import { RatingModule } from 'primeng/rating';
import { ToggleButtonModule } from 'primeng/togglebutton'
import { FormsModule } from '@angular/forms';
import { TagModule } from 'primeng/tag';
import { CardProductComponent } from '../card-product/card-product.component';
import { GroupCardComponent } from '../group-card/group-card.component';
import { ApiService } from '../api.service';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DialogModule } from 'primeng/dialog'
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MessagesModule } from 'primeng/messages';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addProduct, filterProductsByTitle } from '../shared/store/products.actions';
import { ProductsModel } from '../shared/store/user.model'

@Component({
  selector: 'Filter',
  standalone: true,
  imports: [
    MessagesModule,
    SplitButtonModule,
    DialogModule,
    RadioButtonModule,
    CheckboxModule,
    TriStateCheckboxModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    DataViewModule,
    ToggleButtonModule,
    ToolbarModule,
    ButtonModule,
    GroupCardComponent,
    TableModule,
    DataViewModule,
    RatingModule,
    FormsModule,
    TagModule,
    CommonModule,
    CardProductComponent
  ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent implements OnChanges  {
  // Implementa OnChanges para manejar cambios en las propiedades
   messages: any[] = []; // Array para almacenar mensajes
  private store = inject(Store)
  counter!: Observable<number>
  addMessages() {
    this.messages.push({ severity: 'info', summary: 'Info Message', detail: 'Prueba de mensaje' });
  }

  clearMessages() { // Método para limpiar mensajes
    this.messages = [];
  }

  checked: boolean = false; // Estado del checkbox
  ingredient!: string; // Ingrediente para filtrar

  constructor() {
      this.counter = this.store.select('counter')
    this.value = { // Valor inicial del producto
    title: '',
    category: '',
    description: '',
    price: '',
    image: 'https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-new-product-in-banner-style-png-image_5687254.png',
    id:''
    }; 
  }
  public apiService = inject(ApiService)
  confirm= false
  plusIcon = 'assets/plus.png'
  imgInput = 'assets/imgInput.png'
   visible: boolean = false;
  value: ProductsModel;
    showDialog() {
        this.visible = true;
  }
  
  ngOnChanges(changes: SimpleChanges) {
     if (this.apiService.products()) {
    }
  }

  pushValue(value: ProductsModel) { // Método para enviar el valor del producto
    this.confirm = true // Confirma el envío
    this.visible = false; // Oculta el diálogo
       this.store.dispatch(addProduct({...value, id:'21'})) // Despacha la acción para agregar el producto
    setTimeout(() => {
      this.confirm = false; // Deshabilita la confirmación después de  3 segundos
    }, 3000);
  }
  filterProducts(title: string) {
  this.store.dispatch(filterProductsByTitle({ title }));
}
}
