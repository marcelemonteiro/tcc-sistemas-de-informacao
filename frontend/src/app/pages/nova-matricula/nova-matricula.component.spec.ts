import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaMatriculaComponent } from './nova-matricula.component';

describe('NovaMatriculaComponent', () => {
  let component: NovaMatriculaComponent;
  let fixture: ComponentFixture<NovaMatriculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovaMatriculaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovaMatriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
