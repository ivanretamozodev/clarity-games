import { GameService } from './../services/game.service';
import { Component, OnInit } from '@angular/core';
import { GamesSmallResponse } from 'src/app/core/models/games-small-response.model';

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {
    allGames: GamesSmallResponse[] = [];
    page: any;
    constructor(private readonly gameSvc: GameService) {}
    ngOnInit(): void {
        this.getGames();
    }

    getGames() {
        this.gameSvc.getAllGames().subscribe((data) => (this.allGames = data));
    }
}
