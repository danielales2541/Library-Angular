import { ChangeDetectionStrategy, Component } from '@angular/core';
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
  {  icon: 'fa-solid fa-chart-line',
    label: 'Trending',
    subLabel: 'Gifs Populates',
    Route: '/dashboard/trending'
  },
  {  icon: 'fa-solid fa-magnifying-glass',
    label: 'Buscador',
    subLabel: 'Buscar gifs',
    Route: '/dashboard/search'
  },
  ];

 }
