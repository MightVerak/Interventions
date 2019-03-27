import { longueurMin } from "./longueur-minimum.component";
import { AbstractControl } from '@angular/forms';

describe('Longueur zone Validator', () => {
    it('une chaîne avec 10 espaces est invalide', () => {
        let longueur = longueurMin.plage(3);
        let valeurControle = { value: ' '.repeat(10) };
        let result = longueur(valeurControle as AbstractControl);
        expect(result['plageInvalide']).toBeTruthy();
    });

    it('une phrase avec des mots est valide', () => {
        let longueur = longueurMin.plage(3);
        let valeurControle = { value: 'Vive angular' };
        let result = longueur(valeurControle as AbstractControl);
        expect(result).toBeNull;
    });

    it('une phrase avec 3 espaces, des mots et ensuite 3 espaces est valide', () => {
        let longueur = longueurMin.plage(3);
        let valeurControle = { value: '   je le veux   ' };
        let result = longueur(valeurControle as AbstractControl);
        expect(result).toBeNull;
    });

    it('une phrase avec 1 espace et 2 caractères est invalide', () => {
        let longueur = longueurMin.plage(3);
        let valeurControle = { value: ' xx' };
        let result = longueur(valeurControle as AbstractControl);
        expect(result['plageInvalide']).toBeTruthy();
    });

    it('une phrase avec 2 espaces et 1 caractère est invalide', () => {
        let longueur = longueurMin.plage(3);
        let valeurControle = { value: '  x' };
        let result = longueur(valeurControle as AbstractControl);
        expect(result['plageInvalide']).toBeTruthy();
    });

    it('une phrase avec 3 espaces et 3 caractères est valide', () => {
        let longueur = longueurMin.plage(3);
        let valeurControle = { value: '   xxx' };
        let result = longueur(valeurControle as AbstractControl);
        expect(result).toBeNull;
    });

    it('une phrase avec 5 espaces, 5 caractères et 5 espaces est valide', () => {
        let longueur = longueurMin.plage(3);
        let valeurControle = { value: '     xxxxx     ' };
        let result = longueur(valeurControle as AbstractControl);
        expect(result).toBeNull;
    });

    it('une chaîne nulle est invalide', () => {
        let longueur = longueurMin.plage(3);
        let valeurControle = { value: null };
        let result = longueur(valeurControle as AbstractControl);
        expect(result['plageInvalide']).toBeTruthy();
    });

});