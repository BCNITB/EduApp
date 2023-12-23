import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimalSoundsPage } from './animal-sounds.page';

describe('AnimalSoundsPage', () => {
  let component: AnimalSoundsPage;
  let fixture: ComponentFixture<AnimalSoundsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AnimalSoundsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
