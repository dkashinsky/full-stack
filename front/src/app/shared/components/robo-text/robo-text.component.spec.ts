import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboTextComponent } from './robo-text.component';

describe('RoboTextComponent', () => {
  let component: RoboTextComponent;
  let fixture: ComponentFixture<RoboTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoboTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoboTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // TODO: test printed text
});
