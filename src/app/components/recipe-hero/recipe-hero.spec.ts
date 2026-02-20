import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeHero } from './recipe-hero';

describe('RecipeHero', () => {
  let component: RecipeHero;
  let fixture: ComponentFixture<RecipeHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeHero]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeHero);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
