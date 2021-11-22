import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['../login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginCardComponent {
  @Input()
  public title = '';

  @Input()
  public error = '';

  @Input()
  public buttonTitle = '';

  @Input()
  public prefix = '';

  @Input()
  public loginForm!: FormGroup;

  @Input()
  public isError = false;

  @Output('onLogin')
  public onLogin$ = new EventEmitter<void>();

  @Output('onRegistr')
  public onRegistr$ = new EventEmitter<void>();

  public sendForm(prefix: string): void {
    if (prefix === 'login') {
      this.onLogin$.emit();
    } else if (prefix === 'register') {
      this.onRegistr$.emit();
    }
  }

}
