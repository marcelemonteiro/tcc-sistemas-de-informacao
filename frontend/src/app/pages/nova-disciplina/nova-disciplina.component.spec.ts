import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaDisciplinaComponent } from './nova-disciplina.component';

describe('NovaDisciplinaComponent', () => {
  let component: NovaDisciplinaComponent;
  let fixture: ComponentFixture<NovaDisciplinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovaDisciplinaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovaDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
