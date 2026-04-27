import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxZodInterceptor } from './ngx-zod-interceptor';

describe('NgxZodInterceptor', () => {
  let component: NgxZodInterceptor;
  let fixture: ComponentFixture<NgxZodInterceptor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxZodInterceptor],
    }).compileComponents();

    fixture = TestBed.createComponent(NgxZodInterceptor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
