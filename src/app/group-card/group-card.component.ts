import { Component, Input } from '@angular/core';
import { CardProductComponent } from '../card-product/card-product.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'GroupCard',
  standalone: true,
  imports: [
    CommonModule,
    CardProductComponent
  ],
  templateUrl: './group-card.component.html',
  styleUrl: './group-card.component.css'
})
export class GroupCardComponent {

  constructor() {
    this.products = []
  }

  @Input() products: any[];

  ngOnInit() {
  }

}
