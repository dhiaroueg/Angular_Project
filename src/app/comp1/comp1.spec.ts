import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1 } from './comp1';

describe('Comp1', () => {
  let component: Comp1;
  let fixture: ComponentFixture<Comp1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Comp1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Comp1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
