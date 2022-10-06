import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalepedidoComponent } from './detalepedido.component';

describe('DetalepedidoComponent', () => {
  let component: DetalepedidoComponent;
  let fixture: ComponentFixture<DetalepedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalepedidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalepedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
