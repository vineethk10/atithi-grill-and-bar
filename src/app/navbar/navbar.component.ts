import { Component, OnInit, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Location } from '@angular/common';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isNavbarCollapsed = true;
  isBrowser: boolean;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private location: Location,
    private renderer: Renderer2
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.setActiveLink();
    }
  }

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  setActiveLink(event?: Event) {
    if (this.isBrowser) {
      const links = document.querySelectorAll('.nav-link');
      links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('routerLink') === this.location.path()) {
          link.classList.add('active');
        }
      });
      if (event) {
        const clickedLink = event.target as HTMLElement;
        links.forEach(link => {
          if (link === clickedLink) {
            link.classList.add('active');
          }
        });
      }
    }
  }

  onNavItemClick(event: Event) {
    if (this.isBrowser && !this.isNavbarCollapsed) {
      this.toggleNavbar();
    }
    this.setActiveLink(event);
  }
}