import { FavoriteService } from './services/favorites.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { PageComponent } from './page/page.component';

@NgModule({
    declarations: [PageComponent],
    imports: [CommonModule, FavoritesRoutingModule, SharedModule],
    providers: [FavoriteService],
})
export class FavoritesModule {}
