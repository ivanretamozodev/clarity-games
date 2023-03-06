import { Component } from '@angular/core';

@Component({
    selector: 'app-spinner',
    template: ` <div class="container">
        <span class="spinner spinner-inline"> Loading... </span> <span> Free2Play is loading... </span>
    </div>`,
    styles: [
        `
            .container {
                position: fixed;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                z-index: 5;
                background-color: #1b2a32;
            }
        `,
    ],
})
export class SpinnerComponent {}
