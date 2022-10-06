import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalecompraComponent } from './detalecompra.component';

describe('DetalecompraComponent', () => {
  let component: DetalecompraComponent;
  let fixture: ComponentFixture<DetalecompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalecompraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalecompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
