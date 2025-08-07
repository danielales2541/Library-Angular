import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ModalService } from '../../services/ModalService';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent { 

  constructor(private modalservice: ModalService){}

  arirModal(){
    this.modalservice.abrirModal();
  }
}
