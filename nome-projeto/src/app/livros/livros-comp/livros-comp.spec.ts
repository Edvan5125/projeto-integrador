import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivrosComp } from './livros-comp';

describe('LivrosComp', () => {
  let component: LivrosComp;
  let fixture: ComponentFixture<LivrosComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LivrosComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivrosComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
