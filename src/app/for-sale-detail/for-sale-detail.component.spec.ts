import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForSaleDetailComponent } from './for-sale-detail.component';

describe('ForSaleDetailComponent', () => {
  let component: ForSaleDetailComponent;
  let fixture: ComponentFixture<ForSaleDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForSaleDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForSaleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
