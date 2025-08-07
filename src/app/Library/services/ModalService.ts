import { Injectable, signal } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ModalService {
     private modalVisible = signal(false);
  private modalData = signal<any>(null);

  abrirModal(data?: any) {
    this.modalVisible.set(true);
    this.modalData.set(data);
  }

  cerrarModal() {
    this.modalVisible.set(false);
    this.modalData.set(null);
  }

  modalAbierto() {
    return this.modalVisible();
  }

  datosModal() {
    return this.modalData();
  }

    
}