import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { PageComponent } from './page/page.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
    declarations: [PageComponent, GalleryComponent],
    imports: [CommonModule, SwiperModule, DetailsRoutingModule],
})
export class DetailsModule {}
