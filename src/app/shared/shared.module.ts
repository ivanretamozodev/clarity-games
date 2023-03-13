import { PaginationPipe } from './pipes/pagination.pipe';
import { RouterModule } from '@angular/router';
import { SwiperComponent } from './components/swiper/swiper.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { CardComponent } from './components/card/card.component';
import { SwiperModule } from 'swiper/angular';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MaxCharactersPipe } from './pipes/max-characters.pipe';

@NgModule({
    declarations: [CardComponent, SwiperComponent, SpinnerComponent, MaxCharactersPipe, PaginationPipe],
    imports: [CommonModule, RouterModule, ClarityModule, SwiperModule],
    exports: [CardComponent, SwiperComponent, SpinnerComponent, PaginationPipe],
})
export class SharedModule {}
