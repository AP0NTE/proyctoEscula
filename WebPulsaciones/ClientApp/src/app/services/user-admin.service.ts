import { Injectable, Inject } from '@angular/core';
import { UserAdmin } from '../pulsacion/models/user-admin';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
@Injectable({
  providedIn: 'root'
})
export class UserAdminService {
  baseUrl: string;
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService) {
    this.baseUrl = baseUrl;
  }
  get(): Observable<UserAdmin[]> {
    return this.http.get<UserAdmin[]>(this.baseUrl + 'api/UserAdmin')
      .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<UserAdmin[]>('Consulta UserAdmin', null))
      );
  }

  post(UserAdmin: UserAdmin): Observable<UserAdmin> {
    return this.http.post<UserAdmin>(this.baseUrl + 'api/UserAdmin', UserAdmin)
      .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<UserAdmin>('Registrar UserAdmin', null))
      );
  }
}