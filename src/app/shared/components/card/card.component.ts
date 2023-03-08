import { Component, Input, OnInit } from '@angular/core';
import { GamesSmallResponse } from 'src/app/core/models/games-small-response.model';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
    @Input() game!: GamesSmallResponse;
    ngOnInit(): void {
        this.game.favorite = this.isGameFavorite(this.game.id);
    }

    addToFavorites(id: number) {
        const favoriteGames = localStorage.getItem('favoriteGames');
        if (favoriteGames) {
            const parsedGames = JSON.parse(favoriteGames);
            const index = parsedGames.findIndex((game: GamesSmallResponse) => game.id === id);
            if (index !== -1) {
                parsedGames.splice(index, 1);
                this.game.favorite = false;
            } else {
                parsedGames.push(this.game);
                this.game.favorite = true;
            }
            localStorage.setItem('favoriteGames', JSON.stringify(parsedGames));
        } else {
            localStorage.setItem('favoriteGames', JSON.stringify([this.game]));
            this.game.favorite = true;
        }
    }

    getFavoriteGames(): GamesSmallResponse[] {
        const favoriteGames = localStorage.getItem('favoriteGames');
        if (favoriteGames) {
            return JSON.parse(favoriteGames);
        }
        return [];
    }

    isGameFavorite(id: number): boolean {
        const favoriteGames = localStorage.getItem('favoriteGames');
        if (favoriteGames) {
            const parsedGames = JSON.parse(favoriteGames);
            return parsedGames.some((game: GamesSmallResponse) => game.id === id);
        }
        return false;
    }
}
