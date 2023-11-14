import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadAlunoComponent } from './cad-aluno.component';

describe('CadAlunoComponent', () => {
  let component: CadAlunoComponent;
  let fixture: ComponentFixture<CadAlunoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadAlunoComponent]
    });
    fixture = TestBed.createComponent(CadAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
