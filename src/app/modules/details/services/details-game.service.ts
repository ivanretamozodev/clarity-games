import { Observable } from 'rxjs';
import { GamesDetailResponse } from './../../../core/models/game.details.response.interface';
import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

@Injectable({
    providedIn: 'root',
})
export class DetailsGameService {
    private readonly apiUrl: string = environment.apiUrl;
    constructor(private readonly _httpSvc: HttpClient, private readonly location: Location) {}

    getGameDetails(id: string): Observable<GamesDetailResponse> {
        return this._httpSvc.get<GamesDetailResponse>(`${this.apiUrl}/game?id= ${id}`);
    }

    goBack() {
        this.location.back();
    }
}
