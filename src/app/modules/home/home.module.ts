import { ClarityModule } from '@clr/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PagesComponent } from './pages/pages.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [PagesComponent],
    imports: [CommonModule, HomeRoutingModule, ClarityModule, SharedModule],
})
export class HomeModule {}
