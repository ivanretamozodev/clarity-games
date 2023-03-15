import { CATEGORY_SELECTS, PLATTFORMS_SELECTS, SORT_SELECTS } from 'src/app/core/mocks/selects.mocks';
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
    categories: string[] = CATEGORY_SELECTS;
    plattforms: string[] = PLATTFORMS_SELECTS;
    sorts: string[] = SORT_SELECTS;
    plattformSelect: string = '';
    sortSelect: string = '';
    categorySelect: string = '';

    @Output() onPlatformChange: EventEmitter<string> = new EventEmitter<string>();
    @Output() onCategoryChange: EventEmitter<string> = new EventEmitter<string>();
    @Output() onSortChange: EventEmitter<string> = new EventEmitter<string>();

    plattformChange() {
        this.onPlatformChange.emit(this.plattformSelect);
    }
    sortChange() {
        this.onSortChange.emit(this.sortSelect);
    }

    categoryChange() {
        this.onCategoryChange.emit(this.categorySelect);
    }
}
