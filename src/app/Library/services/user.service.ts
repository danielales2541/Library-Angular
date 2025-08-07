import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import { User } from '../interfaces/user.interface';
import { getUser } from '../mapper/user.mapper';
import { interval } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UsersService {
  private http = inject(HttpClient);
  Users = signal<User[]>([]);
  userLoading = signal(true);

  constructor() {
    // Primera carga
    this.getUsers().subscribe();

    // Recarga cada 5 segundos
    interval(1000)
      .pipe(switchMap(() => this.getUsers()))
      .subscribe();
  }

  getUsers() {
    this.userLoading.set(true);

    const credentials = btoa(`${environment.basicAuthUser}:${environment.basicAuthPass}`);
    const headers = new HttpHeaders({
      Authorization: `Basic ${credentials}`,
    });

    // Devuelve el observable sin hacer subscribe aquí
    return this.http.get<User[]>(`${environment.BasicUrl}/users`, { headers }).pipe(
      tap((resp) => {
        const users = getUser.mapUserArray(resp);
        this.Users.set(resp);
        this.userLoading.set(false);
      })
    );
  }
}
