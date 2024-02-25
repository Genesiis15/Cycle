import { Component, OnInit, inject } from '@angular/core';
import {TopBarComponent} from './top-bar/top-bar.component'
import {SideBarComponent} from './side-bar/side-bar.component'
import { RouterOutlet } from '@angular/router';
import { FilterComponent } from './filter/filter.component';
import 'primeflex/primeflex.css';
import "primeng/resources/themes/lara-light-blue/theme.css";
import "primeng/resources/primeng.css";
import { DataProductsComponent } from './data-products/data-products.component';
import { DataViewModule } from 'primeng/dataview';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store'
import { ApiService } from './api.service';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TopBarComponent,
    CommonModule,
    SideBarComponent,
    HttpClientModule,
    RouterOutlet,
    FilterComponent,
    DataProductsComponent,
    DataViewModule,
    
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
  
export class AppComponent implements OnInit{ // Implementa OnInit para inicializar el componente
public apiService = inject(ApiService)
  constructor(private store: Store<{products:[]}>) {

  }
  state = false;
  handleData(data: boolean) {
    this.state = data 
  }
  counterdisplay!: number
  ngOnInit(): void { // Método que se ejecuta al inicializar el componente
    this.store.select('products').subscribe(data => {
       // Se suscribe al estado 'products' del Store
      this.counterdisplay = data.length
      // Asigna la longitud de los datos al contador para mostrar

    })
  
  }
}
