import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProprietariosComponent } from './lista-proprietarios.component';

describe('ListaProprietariosComponent', () => {
  let component: ListaProprietariosComponent;
  let fixture: ComponentFixture<ListaProprietariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaProprietariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaProprietariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
