import { GameService } from './../services/game.service';
import { Component, OnInit } from '@angular/core';
import { GamesSmallResponse } from 'src/app/core/models/games-small-response.model';
import { CATEGORY_SELECTS } from 'src/app/core/mocks/selects.mocks';

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {
    categories: string[] = CATEGORY_SELECTS;
    allGames: GamesSmallResponse[] = [];
    options: string = '';
    page: number = 0;
    constructor(private readonly gameSvc: GameService) {}

    ngOnInit(): void {
        this.getGames();
        console.log(this.options);
    }

    getGames() {
        this.gameSvc.getAllGames().subscribe((data) => (this.allGames = data));
    }
    onCategoryChange() {}
    onSortChange() {}
    onPlattformChange() {}

    nextPage() {
        this.page += 5;
    }

    prevPage() {
        if (this.page > 0) this.page -= 5;
    }
}
