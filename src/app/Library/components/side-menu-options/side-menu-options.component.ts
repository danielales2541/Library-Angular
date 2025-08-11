import {  Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuOPtion {
  label: string;
  subLabel: string;
  Route: string;
  icon: string;
}

@Component({
  selector: 'gifs-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.component.html',
})
export class SideMenuOptionsComponent {

  menuOPtion:MenuOPtion[] = [
  {  icon: 'fa-solid fa-users',
    label: 'Users',
    subLabel: 'Lista de usuarios',
    Route: '/dashboard/trending'
  },
  {  icon: 'fa-solid fa-book',
    label: 'Books',
    subLabel: 'Lista de libros',
    Route: '/dashboard/search'
  },
  {  icon: 'fa-solid fa-share-from-square',
    label: 'Loans',
    subLabel: 'Lista de prestamos',
    Route: '/dashboard/search'
  },
  ];

 }
