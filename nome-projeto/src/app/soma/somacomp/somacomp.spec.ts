import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Somacomp } from './somacomp';

describe('Somacomp', () => {
  let component: Somacomp;
  let fixture: ComponentFixture<Somacomp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Somacomp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Somacomp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
