import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeNewsletter } from './recipe-newsletter';

describe('RecipeNewsletter', () => {
  let component: RecipeNewsletter;
  let fixture: ComponentFixture<RecipeNewsletter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeNewsletter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeNewsletter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
