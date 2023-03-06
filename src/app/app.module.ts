import { SharedModule } from 'src/app/shared/shared.module';
import { ClarityModule } from '@clr/angular';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SetHeadersInterceptor } from './core/interceptors/set-headers.interceptor';
import { SpinnerInterceptor } from './core/interceptors/spinner.interceptor';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, HttpClientModule, SharedModule, ClarityModule],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: SetHeadersInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
