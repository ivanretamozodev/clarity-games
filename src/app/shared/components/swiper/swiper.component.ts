import { GamesSmallResponse } from 'src/app/core/models/games-small-response.model';
import { Component, Input } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
    selector: 'app-swiper',
    templateUrl: './swiper.component.html',
    styleUrls: ['./swiper.component.scss'],
})
export class SwiperComponent {
    @Input() games!: GamesSmallResponse[];
    @Input() title: string = '';
    config: SwiperOptions = {
        slidesPerView: 1.9,
        spaceBetween: 5,
        navigation: false,
        breakpoints: {
            '320': {
                slidesPerView: 1.1,
                spaceBetween: 5,
            },
            '360': {
                slidesPerView: 1.25,
                spaceBetween: 5,
            },
            '375': {
                slidesPerView: 1.3,
                spaceBetween: 5,
            },
            '425': {
                slidesPerView: 1.5,
                spaceBetween: 5,
            },
            '540': {
                slidesPerView: 2.2,
                spaceBetween: 5,
            },
            '640': {
                slidesPerView: 3,
                spaceBetween: 5,
            },
            '768': {
                slidesPerView: 2.8,
                spaceBetween: 5,
            },
            '912': {
                slidesPerView: 3.4,
                spaceBetween: 5,
            },
            '992': {
                slidesPerView: 4.2,
                spaceBetween: 5,
            },
            '1200': {
                slidesPerView: 5.1,
                spaceBetween: 5,
            },
            '1400': {
                slidesPerView: 6.5,
                spaceBetween: 5,
            },
            '1600': {
                slidesPerView: 5.1,
                spaceBetween: 5,
            },
        },
    };
}
