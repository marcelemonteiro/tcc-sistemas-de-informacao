import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoProfessorComponent } from './novo-professor.component';

describe('NovoProfessorComponent', () => {
  let component: NovoProfessorComponent;
  let fixture: ComponentFixture<NovoProfessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovoProfessorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
