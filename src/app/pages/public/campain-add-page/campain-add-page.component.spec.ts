import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampainAddPageComponent } from './campain-add-page.component';

describe('CampainAddPageComponent', () => {
  let component: CampainAddPageComponent;
  let fixture: ComponentFixture<CampainAddPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampainAddPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CampainAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
