import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeFeatured } from './recipe-featured';

describe('RecipeFeatured', () => {
  let component: RecipeFeatured;
  let fixture: ComponentFixture<RecipeFeatured>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeFeatured]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeFeatured);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
