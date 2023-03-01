import { GamesSmallResponse } from './../../../core/models/games-small-response.model';
import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, retry } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class HomeService {
    private readonly apiUrl: string = environment.apiUrl;
    constructor(private readonly httpSvc: HttpClient) {}

    getGamesByTag(tag: string, limit: number = 12): Observable<GamesSmallResponse[]> {
        return this.httpSvc
            .get<GamesSmallResponse[]>(`${this.apiUrl}/games?category=${tag}`)
            .pipe(map((data) => data.slice(0, limit)));
    }
}
