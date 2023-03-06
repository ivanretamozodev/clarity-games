import { RouterModule } from '@angular/router';
import { SwiperComponent } from './components/swiper/swiper.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { CardComponent } from './components/card/card.component';
import { SwiperModule } from 'swiper/angular';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
    declarations: [CardComponent, SwiperComponent, SpinnerComponent],
    imports: [CommonModule, RouterModule, ClarityModule, SwiperModule],
    exports: [CardComponent, SwiperComponent, SpinnerComponent],
})
export class SharedModule {}
