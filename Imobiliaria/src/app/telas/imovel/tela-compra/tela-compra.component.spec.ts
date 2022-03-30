import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaCompraComponent } from './tela-compra.component';

describe('TelaCompraComponent', () => {
  let component: TelaCompraComponent;
  let fixture: ComponentFixture<TelaCompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaCompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
