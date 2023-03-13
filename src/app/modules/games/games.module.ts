import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { PageComponent } from './page/page.component';
import { FormsModule } from '@angular/forms';
import { FiltersComponent } from './components/filters/filters.component';

@NgModule({
    declarations: [PageComponent, FiltersComponent],
    imports: [CommonModule, GamesRoutingModule, FormsModule, SharedModule],
})
export class GamesModule {}
