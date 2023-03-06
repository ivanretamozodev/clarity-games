import { Component, Input } from '@angular/core';
import { GamesDetailResponse } from 'src/app/core/models/game.details.response.interface';

@Component({
    selector: 'app-info-primary',
    templateUrl: './info-primary.component.html',
    styleUrls: ['./info-primary.component.scss'],
})
export class InfoPrimaryComponent {
    @Input() gameDetails!: GamesDetailResponse | null;
}
