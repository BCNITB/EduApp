import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimalGuessPage } from './animal-guess.page';

describe('AnimalGuessPage', () => {
  let component: AnimalGuessPage;
  let fixture: ComponentFixture<AnimalGuessPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AnimalGuessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
