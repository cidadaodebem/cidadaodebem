import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CampainPageComponent } from './campain-page.component';

describe('CampainPageComponent', () => {
  let component: CampainPageComponent;
  let fixture: ComponentFixture<CampainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampainPageComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CampainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
