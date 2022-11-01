import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HysComponent } from './hyss.component';

describe('HyssComponent', () => {
  let component: HysComponent;
  let fixture: ComponentFixture<HysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
