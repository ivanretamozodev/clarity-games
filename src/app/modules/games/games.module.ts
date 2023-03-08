import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { PageComponent } from './page/page.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
    declarations: [PageComponent],
    imports: [CommonModule, GamesRoutingModule, NgxPaginationModule, SharedModule],
})
export class GamesModule {}
