import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HomeService } from '../services/home.service';
import { GamesSmallResponse } from './../../../core/models/games-small-response.model';
import SwiperCore, { Autoplay, Pagination, SwiperOptions } from 'swiper';
SwiperCore.use([Autoplay, Pagination]);

@Component({
    selector: 'app-pages',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.scss'],
    encapsulation: ViewEncapsulation.None,
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
