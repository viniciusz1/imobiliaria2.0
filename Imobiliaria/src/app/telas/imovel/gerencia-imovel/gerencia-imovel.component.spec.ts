import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciaImovelComponent } from './gerencia-imovel.component';

describe('GerenciaImovelComponent', () => {
  let component: GerenciaImovelComponent;
  let fixture: ComponentFixture<GerenciaImovelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerenciaImovelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciaImovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
