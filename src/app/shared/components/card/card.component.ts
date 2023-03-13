import { Component, Input } from '@angular/core';
import { GamesSmallResponse } from 'src/app/core/models/games-small-response.model';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
})
export class CardComponent {
    @Input() game!: GamesSmallResponse;
}
