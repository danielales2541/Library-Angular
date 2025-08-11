import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-dashboar-page',
  imports: [RouterOutlet, SideMenuComponent, NavBarComponent, FooterComponent],
  templateUrl: './dashboar-page.component.html',
})
export default class DashboarPageComponent { }
