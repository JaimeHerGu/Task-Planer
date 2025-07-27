import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  login(email: string, password: string): boolean {
    if (email && password) {
      localStorage.setItem('token', 'fake-token');
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('token');
  }
}
