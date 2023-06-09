import { GamesSmallResponse } from 'src/app/core/models/games-small-response.model';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss'],
    animations: [trigger('fade', [state('void', style({ opacity: 0 })), transition('void <=> *', [animate('1s')])])],
})
export class SliderComponent implements OnInit {
    @Input() games: GamesSmallResponse[] = [];
    @Input() banner: boolean = false;

    currentIndex: number = 0;

    ngOnInit(): void {
        if (!this.banner) {
            setInterval(() => {
                this.currentIndex = ++this.currentIndex % this.games.length;
            }, 4500);
        }
    }
}
