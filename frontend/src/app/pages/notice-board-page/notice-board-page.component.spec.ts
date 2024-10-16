import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeBoardPageComponent } from './notice-board-page.component';

describe('NoticeBoardPageComponent', () => {
  let component: NoticeBoardPageComponent;
  let fixture: ComponentFixture<NoticeBoardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoticeBoardPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticeBoardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
