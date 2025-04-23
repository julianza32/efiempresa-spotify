import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlayListComponent } from './list-play-list.component';

describe('ListPlayListComponent', () => {
  let component: ListPlayListComponent;
  let fixture: ComponentFixture<ListPlayListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListPlayListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPlayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
