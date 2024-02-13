import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesCompanyComponent } from './services-company.component';

describe('ServicesCompanyComponent', () => {
  let component: ServicesCompanyComponent;
  let fixture: ComponentFixture<ServicesCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesCompanyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicesCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
