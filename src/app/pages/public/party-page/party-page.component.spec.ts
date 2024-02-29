import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { PartyPageComponent } from './party-page.component';

describe('PartyPageComponent', () => {
  let component: PartyPageComponent;
  let fixture: ComponentFixture<PartyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartyPageComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PartyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
