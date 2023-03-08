import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'maxCharacters',
})
export class MaxCharactersPipe implements PipeTransform {
    transform(value: string): string {
        const maxCharacters = 19;
        if (value.length <= maxCharacters) return value;
        const newValue: string = value.slice(0, maxCharacters);
        return `${newValue}...`;
    }
}
