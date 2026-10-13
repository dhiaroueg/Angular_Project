import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberForm } from './member-form-component';

describe('MemberForm', () => {
  let component: MemberForm;
  let fixture: ComponentFixture<MemberForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemberForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
