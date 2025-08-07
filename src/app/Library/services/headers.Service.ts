import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

@Injectable({providedIn: 'root'})
export class HeadersService {
    constructor() { }
    

get headers(): HttpHeaders {
    const credentials = btoa(`${environment.basicAuthUser}:${environment.basicAuthPass}`);
    return new HttpHeaders({
      Authorization: `Basic ${credentials}`
    });
  }

}