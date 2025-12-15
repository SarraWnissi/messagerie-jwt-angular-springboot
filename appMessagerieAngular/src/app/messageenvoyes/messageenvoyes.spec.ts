import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Messageenvoyes } from './messageenvoyes';

describe('Messageenvoyes', () => {
  let component: Messageenvoyes;
  let fixture: ComponentFixture<Messageenvoyes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Messageenvoyes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Messageenvoyes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
