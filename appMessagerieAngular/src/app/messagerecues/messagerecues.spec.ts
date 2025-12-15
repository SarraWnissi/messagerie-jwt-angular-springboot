import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Messagerecues } from './messagerecues';

describe('Messagerecues', () => {
  let component: Messagerecues;
  let fixture: ComponentFixture<Messagerecues>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Messagerecues]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Messagerecues);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
