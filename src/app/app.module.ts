import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UiLoaderModule } from './uikit/loader/loader.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
  BrowserModule,
    NoopAnimationsModule,
    HttpClientModule,

    AppRoutingModule,
    UiLoaderModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
