import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ListComponent } from "../../components/list/list.component";
import { UsersService } from '../../services/user.service';
import { HeaderComponent } from "../../components/header/header.component";
import { ModalService } from '../../services/ModalService';
import { ModalFormComponent } from "../../components/modal-form/modal-form.component";
import { ListItemComponent } from "../../components/list/list-item/list-item.component";


@Component({
  selector: 'app-trending-page',
  imports: [ListComponent, HeaderComponent, ModalFormComponent],
  templateUrl: './trending-page.component.html',
})
export default class TrendingPageComponent { 

userService = inject(UsersService)
modalService = inject(ModalService);
}

