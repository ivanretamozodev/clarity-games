import { MinimumSystemRequirements } from './../../../../core/models/game.details.response.interface';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-requirements',
    templateUrl: './requirements.component.html',
    styleUrls: ['./requirements.component.scss'],
})
export class RequirementsComponent {
    @Input() gameRequirements: MinimumSystemRequirements | undefined;
}
