import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutExtraInfoComponent } from './layout-extra-info.component';

describe('LayoutExtraInfoComponent', () => {
  let component: LayoutExtraInfoComponent;
  let fixture: ComponentFixture<LayoutExtraInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutExtraInfoComponent]
    });
    fixture = TestBed.createComponent(LayoutExtraInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
