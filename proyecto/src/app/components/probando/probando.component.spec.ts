import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbandoComponent } from './probando.component';

describe('ProbandoComponent', () => {
  let component: ProbandoComponent;
  let fixture: ComponentFixture<ProbandoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProbandoComponent]
    });
    fixture = TestBed.createComponent(ProbandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
