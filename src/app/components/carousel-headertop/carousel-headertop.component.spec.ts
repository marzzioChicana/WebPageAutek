import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselHeadertopComponent } from './carousel-headertop.component';

describe('CarouselHeadertopComponent', () => {
  let component: CarouselHeadertopComponent;
  let fixture: ComponentFixture<CarouselHeadertopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselHeadertopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarouselHeadertopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
