import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDisciplinaComponent } from './formulario-disciplina.component';

describe('FormularioDisciplinaComponent', () => {
  let component: FormularioDisciplinaComponent;
  let fixture: ComponentFixture<FormularioDisciplinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioDisciplinaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
