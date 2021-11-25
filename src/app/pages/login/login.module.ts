import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginCardComponent } from './card/login-card.component';
import { LoaderModule } from 'src/app/uikit/loader/loader.module';

@NgModule({
  declarations: [
    LoginComponent,
    LoginCardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    LoginRoutingModule,
    LoaderModule,
  ],
})
export class LoginModule { }
