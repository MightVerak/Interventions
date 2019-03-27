import { ValidatorFn, AbstractControl } from '@angular/forms';

export class longueurMin {
    static plage(longueur:number): ValidatorFn {
        return (c: AbstractControl): { [key:string]: boolean } | null => {
            if (c.value && c.value.trim().lenght >= longueur ) {
                return null;
            }
            return { 'plageInvalide': true };
        }
    }
}