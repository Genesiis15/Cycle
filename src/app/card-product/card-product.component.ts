import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { deleteProduct } from '../shared/store/products.actions';

@Component({
  selector: 'CardProduct',
  standalone: true,
  imports: [],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.css'
})
export class CardProductComponent {
  // Define el objeto product con valores iniciales vacíos
  constructor(private store: Store) {
    this.product = {
      category: '',
      image: '',
      title: '',
      description: '',
      price: 0,
      id:'0'
    }
  }
  // Define el icono de estrella para calificaciones
  starIcon = 'assets/star.png'
  // Decorador @Input para recibir datos del componente padre
  @Input() product: {
    category: string
    image: string,
    title: string,
    description: string,
    price: number,
    id:string
  }
  // Array de iconos para diferentes acciones o propiedades del producto
  icons = [
    'assets/view.png',
    'assets/pencil.png',
    'assets/file-export.png',
    'assets/delete.png',
    'assets/elements.png']
  
  handleProduct() {
   this.store.dispatch(deleteProduct({productId: this.product.id}))
  }
}

 
