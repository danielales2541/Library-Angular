import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, inject, input, signal } from '@angular/core';
import { environment } from '@environments/environment';
import { User } from 'src/app/Library/interfaces/user.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModalFormComponent } from '../../modal-form/modal-form.component';
import { ModalService } from '../../../services/ModalService';

@Component({
  selector: 'list-item',
  imports: [],
  templateUrl: './list-item.component.html',
})
export class ListItemComponent { 
   imageUrl = input.required<User []>()
   constructor(private http: HttpClient,  private snackBar: MatSnackBar) {}

    desactiveUser(userId: number, status: number){
      const userPass = `${environment.basicAuthUser}:${environment.basicAuthPass}`;
          const encodedCredentials = btoa(userPass); // función para Base64
      
          const headers = {
            Authorization: `Basic ${encodedCredentials}`
          };
      
      const params = new HttpParams()
      .set('user_id', userId)
      .set('status',status)
       this.http.patch(`${environment.BasicUrl}/users/deactivateUser`, {}, { headers, params }).subscribe({
        next: res => {
        console.log('Desactivado en el servicio', res);
        this.snackBar.open('Usuario desactivado correctamente ✅', 'Cerrar', {
          duration: 3000,
          verticalPosition: 'top',
           horizontalPosition: 'right', // start | center | end | left | right
            panelClass: ['snackbar-success'] 
        });
      },
      error: err => {
        console.error('Error en el servicio', err);
        this.snackBar.open('Error al desactivar usuario ❌', 'Cerrar', {
          duration: 3000,
          verticalPosition: 'top',
            horizontalPosition: 'right',
          panelClass: ['snackbar-error'] 
        });
      }
    });
    }

      activeUser(userId: number, status: number){
      const userPass = `${environment.basicAuthUser}:${environment.basicAuthPass}`;
          const encodedCredentials = btoa(userPass); // función para Base64
      
          const headers = {
            Authorization: `Basic ${encodedCredentials}`
          };
      
      const params = new HttpParams()
      .set('user_id', userId)
      .set('status', status)

       this.http.patch(`${environment.BasicUrl}/users/activateUser`, {}, { headers, params }).subscribe({
     next: res => {
        console.log('activado en el servicio', res);
        this.snackBar.open('Usuario activado correctamente ✅', 'Cerrar', {
          duration: 3000,
          verticalPosition: 'top',
           horizontalPosition: 'right', // start | center | end | left | right
            panelClass: ['snackbar-success'] 
        });
      },
      error: err => {
        console.error('Error en el servicio', err);
        this.snackBar.open('Error al desactivar usuario ❌', 'Cerrar', {
          duration: 3000,
          verticalPosition: 'top',
            horizontalPosition: 'right',
          panelClass: ['snackbar-error'] 
        });
      }
    });
    }
   

    deleteUser(userId: number){
         const userPass = `${environment.basicAuthUser}:${environment.basicAuthPass}`;
          const encodedCredentials = btoa(userPass); // función para Base64
      
          const headers = {
            Authorization: `Basic ${encodedCredentials}`
          };

                  this.http.delete(`${environment.BasicUrl}/users/${userId}`,{ headers}).subscribe({
                next: res => {
                    console.log('activado en el servicio', res);
                    this.snackBar.open('Usuario Eliminado correctamente ✅', 'Cerrar', {
                      duration: 3000,
                      verticalPosition: 'top',
                      horizontalPosition: 'right', // start | center | end | left | right
                        panelClass: ['snackbar-success'] 
                    });
                  },
              error: err => {
                console.error('Error en el servicio', err);
                this.snackBar.open('Error al desactivar usuario ❌', 'Cerrar', {
                  duration: 3000,
                  verticalPosition: 'top'
                });
              }
            });
      
    }

     modalService = inject(ModalService);

    

     abrirModalEditar(usuario: User) {
        this.modalService.abrirModal(usuario);
      }

}
