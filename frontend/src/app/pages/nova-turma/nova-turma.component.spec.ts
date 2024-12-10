import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaTurmaComponent } from './nova-turma.component';

describe('NovaTurmaComponent', () => {
  let component: NovaTurmaComponent;
  let fixture: ComponentFixture<NovaTurmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovaTurmaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovaTurmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
