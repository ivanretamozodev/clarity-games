import { ClarityModule } from '@clr/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { PageComponent } from './page/page.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { SwiperModule } from 'swiper/angular';
import { InfoPrimaryComponent } from './components/info-primary/info-primary.component';
import { RequirementsComponent } from './components/requirements/requirements.component';

@NgModule({
    declarations: [PageComponent, GalleryComponent, InfoPrimaryComponent, RequirementsComponent],
    imports: [CommonModule, SwiperModule, DetailsRoutingModule],
})
export class DetailsModule {}
