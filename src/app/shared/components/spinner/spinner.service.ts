import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class SpinnerService {
    public spinnerStatus$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    hideSpinner() {
        this.spinnerStatus$.next(false);
    }
    showSpinner() {
        this.spinnerStatus$.next(true);
    }
}
