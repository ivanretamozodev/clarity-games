import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { GamesSmallResponse } from './../../../core/models/games-small-response.model';

@Component({
    selector: 'app-pages',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit {
    constructor(private readonly homeSvc: HomeService) {}
    games: GamesSmallResponse[] = [];
    ngOnInit(): void {
        this.getGames();
    }

    getGames() {
        this.homeSvc.getGames().subscribe((data) => (this.games = data));
    }
}
