import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, inject, input, signal } from '@angular/core';
import { environment } from '@environments/environment';
import { User } from 'src/app/Library/interfaces/user.interface';

import { MatSnackBar } from '@angular/material/snack-bar';
import { ModalFormComponent } from '../../modal-form/modal-form.component';
import { ModalService } from '../../../services/ModalService';
import { ApiResponse } from 'src/app/Library/interfaces/respuesta.interface';
import { HeadersService } from 'src/app/Library/services/headers.Service';

@Component({
  selector: 'list-item',
  imports: [],
  templateUrl: './list-item.component.html',
})
export class ListItemComponent { 
   imageUrl = input.required<User []>()
   constructor(private http: HttpClient,  private snackBar: MatSnackBar ) {}
      headers = inject(HeadersService).headers;
      modalService = inject(ModalService);
      
      abrirModalEditar(usuario: User) {
        this.modalService.abrirModal(usuario);
      }

    desactiveUser(userId: number, status: number){
      const params = new HttpParams()
      .set('user_id', userId)
      .set('status',status)
       this.http.patch<ApiResponse<null>>(`${environment.BasicUrl}/users/deactivateUser`, {}, { headers: this.headers, params, observe: 'response' }).subscribe({
        next: res => {
        this.snackBar.open(`${res.body?.message}✅`, 'Cerrar', {
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
  
      const params = new HttpParams()
      .set('user_id', userId)
      .set('status', status)

       this.http.patch<ApiResponse<null>>(`${environment.BasicUrl}/users/activateUser`, {}, { headers: this.headers, params , observe: 'response'}).subscribe({
     next: res => {
        this.snackBar.open(`${res.body?.message}✅`, 'Cerrar', {
          duration: 3000,
          verticalPosition: 'top',
           horizontalPosition: 'right', // start | center | end | left | right
            panelClass: ['snackbar-success'] 
        });
      },
      error: err => {
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
         this.http.delete<ApiResponse<null>>(`${environment.BasicUrl}/users/${userId}`,{ headers: this.headers,  observe: 'response'}).subscribe({
                next: res => {
                    console.log('activado en el servicio', res);
                    this.snackBar.open(`${res.body?.message}✅`, 'Cerrar', {
                      duration: 3000,
                      verticalPosition: 'top',
                      horizontalPosition: 'right', // start | center | end | left | right
                        panelClass: ['snackbar-success'] 
                    });
                  },
              error: err => {
                console.error('Error en el servicio', err.error.message);
                this.snackBar.open(`${ err.error.message}❌`, 'Cerrar', {
                  duration: 3000,
                  verticalPosition: 'top'
                });
              }
          });
      
    }

    
}
