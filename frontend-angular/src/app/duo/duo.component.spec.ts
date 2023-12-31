import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuoComponent } from './duo.component';

describe('DuoComponent', () => {
  let component: DuoComponent;
  let fixture: ComponentFixture<DuoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DuoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DuoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
