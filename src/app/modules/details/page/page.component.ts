import { observable, Subscription } from 'rxjs';
import {
    GamesDetailResponse,
    Screenshot,
    MinimumSystemRequirements,
} from './../../../core/models/game.details.response.interface';
import { DetailsGameService } from './../services/details-game.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit, OnDestroy {
    gameId: string = '';
    gameDetails!: GamesDetailResponse | null;
    screenshots: Screenshot[] = [];
    systemRequirements: MinimumSystemRequirements | undefined;
    listObservables$: Subscription[] = [];
    constructor(
        private readonly _detailsGameSvc: DetailsGameService,
        private readonly _activatedRoute: ActivatedRoute
    ) {}
    ngOnInit(): void {
        this.getId();
        this.getGameDetails(this.gameId);
    }

    getId(): void {
        const observer$: Subscription = this._activatedRoute.params.subscribe(({ id }) => (this.gameId = id));
        this.listObservables$.push(observer$);
    }

    getGameDetails(id: string): void {
        const observer1$: Subscription = this._detailsGameSvc.getGameDetails(id).subscribe((data) => {
            this.gameDetails = data;
            this.screenshots = data.screenshots;
            this.systemRequirements = data.minimum_system_requirements;
        });
        this.listObservables$.push(observer1$);
    }

    ngOnDestroy(): void {
        this.listObservables$.forEach((observable) => observable.unsubscribe());
    }
}
