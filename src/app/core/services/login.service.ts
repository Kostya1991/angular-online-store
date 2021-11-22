import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LoginBody, User } from '../interfaces/login.interface';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { firebaseConfig } from './../../../../firebase.config';
import { takeUntil, tap } from 'rxjs/operators';

const LOCAT_TOKEN = 'user';

@Injectable({
  providedIn: 'root',
})
export class LoginService implements OnDestroy {
  public isLogin = false;

  private user$ = new BehaviorSubject<User | null>(null);
  private destroy$ = new Subject<boolean>();

  constructor(
    private http: HttpClient,
  ) {
    const userToken: string | null = localStorage.getItem(LOCAT_TOKEN);
    if (userToken) {
      const user: User | null = JSON.parse(userToken);
      this.user$.next(user);
    }

    this.user$.pipe(
      takeUntil(this.destroy$),
    ).subscribe((user: User | null) => {
      if (!user) {
        this.isLogin = false;
      } else {
        this.isLogin = true;
      }
    });
  }

  public login(loginBody: LoginBody, action: string): Observable<User> {
    const url = action === 'login' ?
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' :
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';

    return this.http.post<User>(url + firebaseConfig.apiKey,
      loginBody,
    ).pipe(
      tap((user: User) => {
        localStorage.setItem(LOCAT_TOKEN, JSON.stringify(user));
        this.user$.next(user);
      }),
    );
  }

  public ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
