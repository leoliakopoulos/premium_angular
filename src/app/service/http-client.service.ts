import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private http: HttpClient) { }

   change(token: string, newPassword: string): Observable<boolean> {
     const httpOptions = {
       headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
     };
    return this.http.post<boolean>(`${environment.apiUrl}/api/auth/change`, `token=${token}&password=${newPassword}`, httpOptions);
  /*  const response = await fetch(`${environment.apiUrl}/api/auth/change`, {
      method: 'POST',
      body: `token=${token}&password=${newPassword}`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    return await response.text() === 'true';*/
  }
}
