import { GamesSmallResponse } from 'src/app/core/models/games-small-response.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class GameService {
    private readonly apiUrl: string = environment.apiUrl;
    constructor(private readonly _httpSvc: HttpClient) {}

    getAllGames(): Observable<GamesSmallResponse[]> {
        return this._httpSvc.get<GamesSmallResponse[]>(`${this.apiUrl}/games`);
    }

    getAllGamesFiltered(plattform: string, category: string, sort: string): Observable<GamesSmallResponse[]> {
        return this._httpSvc.get<GamesSmallResponse[]>(
            `${this.apiUrl}/games?platform=${plattform ? plattform : 'pc'}&category=${
                category ? category : 'mmorpg'
            }&sort-by=${sort ? sort : 'popularity'}`
        );
    }
}
