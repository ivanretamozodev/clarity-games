import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class FavoriteService {
    private favoriteGamesChangedSubject = new Subject<void>();

    constructor() {}

    getFavoriteGamesChangedObservable(): Observable<void> {
        return this.favoriteGamesChangedSubject.asObservable();
    }

    emitFavoriteGamesChangedEvent() {
        this.favoriteGamesChangedSubject.next();
    }
}
