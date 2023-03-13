import { GamesSmallResponse } from 'src/app/core/models/games-small-response.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'pagination' })
export class PaginationPipe implements PipeTransform {
    transform(value: GamesSmallResponse[], page: number) {
        return value.slice(page, page + 10);
    }
}
