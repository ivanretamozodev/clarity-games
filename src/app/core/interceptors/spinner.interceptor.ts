import { SpinnerService } from './../../shared/components/spinner/spinner.service';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { finalize, Observable } from 'rxjs';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
    constructor(public spinnerSvc: SpinnerService) {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        this.spinnerSvc.showSpinner();
        return next.handle(request).pipe(
            finalize(() => {
                this.spinnerSvc.hideSpinner();
            })
        );
    }
}
