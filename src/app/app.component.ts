import { AfterViewChecked, ChangeDetectorRef, Component } from '@angular/core';
import '@cds/core/icon/register.js';
import { ClarityIcons, userIcon } from '@cds/core/icon';
import { SpinnerService } from './shared/components/spinner/spinner.service';

ClarityIcons.addIcons(userIcon);

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewChecked {
    constructor(public readonly spinnerSvc: SpinnerService, private readonly cd: ChangeDetectorRef) {}
    ngAfterViewChecked(): void {
        this.cd.detectChanges();
    }
    collapsed: boolean = false;
}
