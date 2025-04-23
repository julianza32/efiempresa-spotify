import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { INavItems } from '../../../types/navItems';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-layout-nav',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './layout-nav.component.html',
  styleUrl: './layout-nav.component.scss',
})
export class LayoutNavComponent {
  @Input() navItems: INavItems[] = [];
  router = inject(Router);

  navigate(route: string): void {
    this.router.navigate([route]);
  }
}
