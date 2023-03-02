import { Observable } from 'rxjs';
import { GamesDetailResponse } from './../../../core/models/game.details.response.interface';
import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class DetailsGameService {
    private readonly apiUrl: string = environment.apiUrl;
    constructor(private readonly _httpSvc: HttpClient) {}

    getGameDetails(id: string): Observable<GamesDetailResponse> {
        return this._httpSvc.get<GamesDetailResponse>(`${this.apiUrl}/game?id= ${id}`);
    }
}
