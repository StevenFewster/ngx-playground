import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightNav } from './side-nav';

describe('RightNav', () => {
  let component: RightNav;
  let fixture: ComponentFixture<RightNav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightNav],
    }).compileComponents();

    fixture = TestBed.createComponent(RightNav);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
