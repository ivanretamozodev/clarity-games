import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SetHeadersInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const headers = new HttpHeaders({
            'X-RapidAPI-Key': '60614a1f37msh5237241d1ac3fc0p13598cjsn7a8555a2b00b',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
        });

        const modifiedRequest = request.clone({ headers });

        return next.handle(modifiedRequest);
    }
}
