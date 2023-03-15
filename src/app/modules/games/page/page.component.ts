import { Component, OnInit } from '@angular/core';
import { GamesSmallResponse } from 'src/app/core/models/games-small-response.model';
import { GameService } from './../services/game.service';

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {
    allGames: GamesSmallResponse[] = [];
    options: string = '';
    page: number = 0;
    constructor(private readonly gameSvc: GameService) {}
    category: string = '';
    sort: string = '';
    plattform: string = '';

    ngOnInit(): void {
        this.getGames();
    }

    getGames() {
        this.gameSvc.getAllGames().subscribe((data) => (this.allGames = data));
    }
    categoryChange(category: string) {
        this.page = 0;
        this.category = category;
        this.gameSvc
            .getAllGamesFiltered(this.plattform, category, this.sort)
            .subscribe((games) => (this.allGames = games));
    }
    sortChange(sort: string) {
        this.page = 0;
        this.sort = sort;
        this.gameSvc
            .getAllGamesFiltered(this.plattform, this.category, sort)
            .subscribe((games) => (this.allGames = games));
    }
    plattformChange(plattform: string) {
        this.page = 0;
        this.plattform = plattform;
        this.gameSvc
            .getAllGamesFiltered(plattform, this.category, this.sort)
            .subscribe((games) => (this.allGames = games));
    }

    nextPage() {
        this.page += 5;
    }

    prevPage() {
        if (this.page > 0) this.page -= 5;
    }
}
