import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeChildComponent } from './se-child.component';

describe('SeChildComponent', () => {
  let component: SeChildComponent;
  let fixture: ComponentFixture<SeChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
