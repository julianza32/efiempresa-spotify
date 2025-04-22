import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoGenresComponent } from './info-genres.component';

describe('InfoGenresComponent', () => {
  let component: InfoGenresComponent;
  let fixture: ComponentFixture<InfoGenresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoGenresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoGenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
