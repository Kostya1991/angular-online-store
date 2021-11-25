import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { first } from 'rxjs/operators';

import { LoginBody } from 'src/app/core/interfaces/login.interface';
import { LoginService } from 'src/app/core/services/login.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoaderService } from 'src/app/core/services/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  public register$ = new BehaviorSubject<boolean>(false);
  public error$ = new BehaviorSubject<boolean>(false);
  public loader$: Observable<boolean> = this.loaderService.getLoading();

  public readonly loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  public readonly registrForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor(
    private loginService: LoginService,
    private loaderService: LoaderService,
    private router: Router,
  ) {}

  public toggleRegister(): void {
    this.register$.next(!this.register$.getValue());
  }

  public login(): void {
    if (!this.loginForm.valid) {
      return;
    }

    const loginBody: LoginBody = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };

    this.send(loginBody, 'login');
  }

  public registr(): void {
    if (!this.registrForm.valid) {
      return;
    }

    const registrBody: LoginBody = {
      email: this.registrForm.value.email,
      password: this.registrForm.value.password,
    };

    this.send(registrBody, 'registr');
  }

  public send(data: LoginBody, action: string): void {
    this.error$.next(false);
    this.loaderService.setLoading(true)

    this.loginService.login(data, action).pipe(
      first(),
    ).subscribe(
      () => {
        this.router.navigate(['/']);
        this.loginForm.reset();
        this.registrForm.reset();
      },
      () => {
        this.error$.next(true);
        this.loaderService.setLoading(false);
      },
      () => this.loaderService.setLoading(false),
    );
  }

}
