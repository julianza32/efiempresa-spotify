import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonLoginAvatarComponent } from './button-login-avatar.component';

describe('ButtonLoginAvatarComponent', () => {
  let component: ButtonLoginAvatarComponent;
  let fixture: ComponentFixture<ButtonLoginAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonLoginAvatarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonLoginAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
