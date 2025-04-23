import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from '../../types/user';

@Injectable({
  providedIn: 'root',
})
export class SesionService {
  constructor() {}

  private sessionSubject = new BehaviorSubject<IUser | undefined>(
    this.getSession()
  );
  session$ = this.sessionSubject.asObservable();

  private getSession(): IUser | undefined {
    if (typeof window === 'undefined') return undefined;
    const storedSession = localStorage.getItem('spotify_data_me');
    return storedSession ? JSON.parse(storedSession) : undefined;
  }

  setSession(user: IUser) {
    if (typeof window === 'undefined') return;
    localStorage.setItem('spotify_data_me', JSON.stringify(user));
    this.sessionSubject.next(user);
  }

  clearSession() {
    if (typeof window === 'undefined') return;
    localStorage.removeItem('spotify_data_me');
    localStorage.removeItem('spotify_access_token');
    localStorage.removeItem('spotify_code_verifier');
    this.sessionSubject.next(undefined);
  }
}
