import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciaProprietarioComponent } from './gerencia-proprietario.component';

describe('GerenciaProprietarioComponent', () => {
  let component: GerenciaProprietarioComponent;
  let fixture: ComponentFixture<GerenciaProprietarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerenciaProprietarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciaProprietarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
