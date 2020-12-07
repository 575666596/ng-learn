import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeParentComponent } from './se-parent.component';

describe('SeParentComponent', () => {
  let component: SeParentComponent;
  let fixture: ComponentFixture<SeParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
