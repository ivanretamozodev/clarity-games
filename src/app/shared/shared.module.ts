import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { CardComponent } from './components/card/card.component';

@NgModule({
    declarations: [CardComponent],
    imports: [CommonModule, ClarityModule],
    exports: [CardComponent],
})
export class SharedModule {}
