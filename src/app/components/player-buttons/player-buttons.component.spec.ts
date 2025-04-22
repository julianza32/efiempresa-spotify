import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerButtonsComponent } from './player-buttons.component';

describe('PlayerButtonsComponent', () => {
  let component: PlayerButtonsComponent;
  let fixture: ComponentFixture<PlayerButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
