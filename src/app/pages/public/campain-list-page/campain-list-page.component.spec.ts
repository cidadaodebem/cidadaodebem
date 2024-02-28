import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { CampainListPageComponent } from './campain-list-page.component';

describe('CampainListPageComponent', () => {
  let component: CampainListPageComponent;
  let fixture: ComponentFixture<CampainListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampainListPageComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CampainListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
