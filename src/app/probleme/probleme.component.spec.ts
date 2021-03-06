import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemeComponent } from './probleme.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('ProblemeComponent', () => {
  let component: ProblemeComponent;
  let fixture: ComponentFixture<ProblemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ ProblemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 it('should create', () => {
   expect(component).toBeTruthy();
 });
 
 it('champ prenom invalide avec 2 caractères', () => {
    let zone = component.problemeForm.controls['prenom'];
    zone.setValue('a'.repeat(2));
    expect(zone.valid).toBeFalsy();
 });

 it('champ prenom valide avec 3 caractères', () => {
  let zone = component.problemeForm.controls['prenom'];
  zone.setValue('a'.repeat(3));
  expect(zone.valid).toBeFalsy();
});

it('champ prenom valide avec 200 caractères', () => {
  let zone = component.problemeForm.controls['prenom'];
  zone.setValue('a'.repeat(200));
  expect(zone.valid).toBeFalsy();
});

it('champ prenom invalide avec aucune valeur', () => {
  let zone = component.problemeForm.controls['prenom'];
  zone.setValue('');
  expect(zone.valid).toBeFalsy();
});

it('champ prenom invalide avec 10 espaces', () => {
  let errors = {};
  let zone = component.problemeForm.controls['prenom'];
  zone.setValue(' '.repeat(10));
  expect(errors['plageInvalide']).toBeUndefined();
});

it('champ prenom invalide avec 2 espaces et 1 caractère', () => {
  let errors = {};
  let zone = component.problemeForm.controls['prenom'];
  zone.setValue('  a');
  expect(errors['plageInvalide']).toBeUndefined();
});

});
