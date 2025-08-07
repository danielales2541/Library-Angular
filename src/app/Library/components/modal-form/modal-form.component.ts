import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; // 👈 Importado aquí
import { ModalService } from '../../services/ModalService';
import { environment } from '@environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'modal-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './modal-form.component.html',
})
export class ModalFormComponent implements OnInit {
  @Input() usuario: any;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private modalService: ModalService,
    private http: HttpClient,
    private snackBar: MatSnackBar // 👈 Inyectado aquí
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit() {
    if (this.usuario) {
      this.form.patchValue({
        name: this.usuario.name,
        email: this.usuario.email,
        id: this.usuario.id,
      });
    }
  }

  cerrarModal() {
    this.modalService.cerrarModal();
  }

  enviarFormulario() {
  if (this.form.valid) {
    const datos = this.form.value;

    const userPass = `${environment.basicAuthUser}:${environment.basicAuthPass}`;
    const encodedCredentials = btoa(userPass);
    const headers = {
      Authorization: `Basic ${encodedCredentials}`
    };

    if (this.usuario) {
      // 🔧 Modo edición
      const userId = this.usuario.id;
      const datos = { ...this.form.value, id: userId };     
      
      this.http.put(`${environment.BasicUrl}/users`, datos, { headers }).subscribe({
        next: res => {
        console.log('Desactivado en el servicio', res);
        this.snackBar.open('Usuario actualizado correctamente ✅', 'Cerrar', {
          duration: 3000,
          verticalPosition: 'top',
           horizontalPosition: 'right', // start | center | end | left | right
            panelClass: ['snackbar-success'] 
        });
          this.cerrarModal();
        },
        error: (error) => {
         console.error('Error en el servicio', error);
        this.snackBar.open('Error al actualizar el usuario ❌', 'Cerrar', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['snackbar-error'] 
        });
        }
      });
    } else {
      // 🆕 Modo creación
      this.http.post(`${environment.BasicUrl}/users`, datos, { headers }).subscribe({
        next: (respuesta) => {
        this.snackBar.open('Usuario creado correctamente ✅', 'Cerrar', {
          duration: 3000,
          verticalPosition: 'top',
           horizontalPosition: 'right', // start | center | end | left | right
            panelClass: ['snackbar-success'] 
        });
          this.cerrarModal();
        },
        error: (error) => {
        console.error('Error en el servicio', error);
        this.snackBar.open('Error al crear usuario ❌', 'Cerrar', {
          duration: 3000,
          verticalPosition: 'top',
            horizontalPosition: 'right',
          panelClass: ['snackbar-error'] 
        });
        }
      });
    }
  } else {
    console.warn('Formulario inválido');
  }
}

}
