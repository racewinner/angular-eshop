
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, tap, catchError, of } from 'rxjs';
import {
  UserRegister,
  UserLogin,
  AccountToken,
} from '../models/user.model';
import { environment } from '../../../environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly API_URL = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) {

  }

  login(): Observable<AccountToken> {
    return this.http.post<AccountToken>(`${this.API_URL}/api/auth/get_token`, {})
    .pipe(
      tap((response: AccountToken) => {
        console.log('✅ Login successful:', response);
        if (response.success && response.token) {
          this.tokenService.setToken(response.token)
        }
      }),
      catchError((error: any) => {
        console.log('❌ Login failed:', error);
        // throw error;
        return of({
          success: false,
          msg: 'api communication error.',
        } as AccountToken);
      })
    )
  }

  register(user: UserRegister): Observable<UserRegister> {
    return this.http.post<UserRegister>(`${this.API_URL}/api/product/get_products`, user)
  }

  getUsers() {
    return this.http.get<UserRegister>(`${this.API_URL}/api/product/get_products`)
  }

  isLoggedIn(): boolean {
    const authenticated = false;

    if (!authenticated) {
      const token = this.tokenService.getToken();

      if (token) {
        return true;
      }
    }

    return authenticated;
  }
}