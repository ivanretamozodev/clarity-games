import { Component, Input, Output } from '@angular/core';

@Component({
    selector: 'app-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
    /*     @Output()
    plattfotm: string = '';
    @Output()
    category: string = '';
    @Output()
    sort: string = ''; */
    @Input()
    categories: string[] = [];

    onPlattformChange(event: any) {
        console.log(event);
    }
}
