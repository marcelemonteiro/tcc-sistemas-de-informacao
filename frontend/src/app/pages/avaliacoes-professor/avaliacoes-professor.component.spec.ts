import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacoesProfessorComponent } from './avaliacoes-professor.component';

describe('AvaliacoesProfessorComponent', () => {
  let component: AvaliacoesProfessorComponent;
  let fixture: ComponentFixture<AvaliacoesProfessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvaliacoesProfessorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvaliacoesProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
