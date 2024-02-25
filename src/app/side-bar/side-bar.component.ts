import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar'


@Component({
  selector: 'SideBar',
  standalone: true,
  imports: [
    RouterLink,
    SidebarModule,
    ButtonModule
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  sidebarVisible: boolean = false;
  constructor() {
    this.state = true;
  }

  // Define el menú de la barra lateral con títulos y URLs
  menu = [{
    title: 'productos',
    url: '/products'
  },
  {
    title: 'categoria',
    url: '/men'
  }]

  @Input() state: boolean;
  // Decorador @Input para recibir el estado de la barra lateral desde el componente padre
  @Output() dataChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  // Decorador @Output para emitir cambios de estado al componente padre
  
  
  sendDataToParent() {
    this.dataChange.emit(false);
    // Emite el estado actual de la barra lateral al componente padre
  }

}

