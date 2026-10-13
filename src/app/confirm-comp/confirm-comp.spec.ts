import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmComp } from './confirm-comp';

describe('ConfirmComp', () => {
  let component: ConfirmComp;
  let fixture: ComponentFixture<ConfirmComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
