import { GamesSmallResponse } from 'src/app/core/models/games-small-response.model';
import { Component, OnInit } from '@angular/core';
import { FavoritesGameService } from 'src/app/core/services/favorite.service';

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {
    favoriteGames: GamesSmallResponse[] = [];

    constructor() {}

    ngOnInit(): void {}
}
