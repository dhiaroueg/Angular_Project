import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tool } from './tool';

describe('Tool', () => {
  let component: Tool;
  let fixture: ComponentFixture<Tool>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tool]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tool);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
