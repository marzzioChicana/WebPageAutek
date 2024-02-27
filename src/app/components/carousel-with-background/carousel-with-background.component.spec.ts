import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselWithBackgroundComponent } from './carousel-with-background.component';

describe('CarouselWithBackgroundComponent', () => {
  let component: CarouselWithBackgroundComponent;
  let fixture: ComponentFixture<CarouselWithBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselWithBackgroundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarouselWithBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
