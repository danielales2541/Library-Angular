import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";

@Component({
  selector: 'app-dashboar-page',
  imports: [RouterOutlet, SideMenuComponent, NavBarComponent],
  templateUrl: './dashboar-page.component.html',
})
export default class DashboarPageComponent { }
