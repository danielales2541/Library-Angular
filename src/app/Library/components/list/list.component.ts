import { Component, input } from '@angular/core';
import { ListItemComponent } from "./list-item/list-item.component";
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'list',
  imports: [ListItemComponent],
  templateUrl: './list.component.html',
})
export class ListComponent {
  users = input.required<User[]>()

 }
