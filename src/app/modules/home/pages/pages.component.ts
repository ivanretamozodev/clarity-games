import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { HomeService } from '../services/home.service';
import { GamesSmallResponse } from './../../../core/models/games-small-response.model';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import { Subscription } from 'rxjs';
SwiperCore.use([Autoplay, Pagination]);

@Component({
    selector: 'app-pages',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class PagesComponent implements OnInit, OnDestroy {
    constructor(private readonly homeSvc: HomeService) {}
    shooterGames: GamesSmallResponse[] = [];
    pvpGames: GamesSmallResponse[] = [];
    openWorldGames: GamesSmallResponse[] = [];

    listObservables: Subscription[] = [];
    ngOnInit(): void {
        this.getGames();
    }

    getGames() {
        const observer$: Subscription = this.homeSvc
            .getGamesByTag('Shooter')
            .subscribe((data) => (this.shooterGames = data));
        const observer1$: Subscription = this.homeSvc.getGamesByTag('pvp').subscribe((data) => (this.pvpGames = data));
        const observer2$: Subscription = this.homeSvc
            .getGamesByTag('open-world')
            .subscribe((data) => (this.openWorldGames = data));

        this.listObservables.push(observer$, observer1$, observer2$);
    }
    ngOnDestroy(): void {
        this.listObservables.forEach((observable) => observable.unsubscribe());
    }
}
