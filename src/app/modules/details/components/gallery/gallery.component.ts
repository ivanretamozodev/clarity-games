import { Screenshot } from './../../../../core/models/game.details.response.interface';

import { Component, ViewEncapsulation, Input } from '@angular/core';

// import Swiper core and required modules
import SwiperCore, { FreeMode, Navigation, SwiperOptions, Thumbs } from 'swiper';

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class GalleryComponent {
    thumbsSwiper: any;
    @Input() images: Screenshot[] = [];

    config: SwiperOptions = {
        loop: true,
        spaceBetween: 5,
        breakpoints: {
            '320': { slidesPerView: 3 },
        },
    };
}
