import { ClarityModule } from '@clr/angular';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SetHeadersInterceptor } from './core/interceptors/set-headers.interceptor';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, ClarityModule],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: SetHeadersInterceptor, multi: true }],
    bootstrap: [AppComponent],
})
export class AppModule {}
