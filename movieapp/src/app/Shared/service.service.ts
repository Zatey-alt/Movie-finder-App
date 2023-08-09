import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { from, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private authService: Auth) {}

  signin(username: string, password: string): Observable<any> {
    return from(
      signInWithEmailAndPassword(this.authService, username, password)
    ).pipe(
      catchError((error) => {
        // Handle the error and return it as a rejected Promise
        return throwError(error);
      })
    );
  }

  logout(): Observable<any> {
    return from(this.authService.signOut());
  }
}
