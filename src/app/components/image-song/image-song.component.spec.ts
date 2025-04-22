import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSongComponent } from './image-song.component';

describe('ImageSongComponent', () => {
  let component: ImageSongComponent;
  let fixture: ComponentFixture<ImageSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageSongComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
