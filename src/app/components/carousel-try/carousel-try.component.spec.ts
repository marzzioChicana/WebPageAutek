import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselTryComponent } from './carousel-try.component';

describe('CarouselTryComponent', () => {
  let component: CarouselTryComponent;
  let fixture: ComponentFixture<CarouselTryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselTryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarouselTryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
