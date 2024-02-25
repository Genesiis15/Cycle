import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIcon } from '@angular/material/icon';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar'
import { RouterLink } from '@angular/router';
@Component({
  selector: 'TopBar',
  standalone: true,
  imports: [
    RouterOutlet,
    MatMenuModule,
    MatToolbar,
    MatIcon,
    ButtonModule,
    SidebarModule,
    RouterLink
  ],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css',
  animations: [
    trigger('transformMenu', [
      state('start', style({ transform: 'translateX(-100%)' })),
      state('end', style({ transform: 'translateX(0)' })),
      transition('start => end', animate('300ms ease-out')),
      transition('end => start', animate('300ms ease-in'))
    ])
  ]
})
export class TopBarComponent{
  imagen = ['assets/GenesisProfile.png'];
  arrowIcon = 'assets/arrowIcon.png';
  homeIcon = 'assets/homeIcon.png';
  menu = [{
    title: 'All',
    url: '/all'
  },
    {
    title: 'Men',
    url: '/men'
  },
  {
    title: 'Woman',
    url: '/woman'
      },
     {
    title: 'Jewelery',
    url: '/jewelery'
      },
      {
    title: 'Electronics',
    url: '/electronics'
    }]
  
  profileData = ['Genesis Rojas', 'genesisnrt@gmail.com']
  state: boolean = false
  profile: boolean = false
}
