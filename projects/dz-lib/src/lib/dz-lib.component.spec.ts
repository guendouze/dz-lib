import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzLibComponent } from './dz-lib.component';

describe('DzLibComponent', () => {
  let component: DzLibComponent;
  let fixture: ComponentFixture<DzLibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DzLibComponent]
    });
    fixture = TestBed.createComponent(DzLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
