import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioTurmaComponent } from './formulario-turma.component';

describe('FormularioTurmaComponent', () => {
  let component: FormularioTurmaComponent;
  let fixture: ComponentFixture<FormularioTurmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioTurmaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioTurmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
