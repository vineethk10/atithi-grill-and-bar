import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isNavbarCollapsed = true;

  constructor(private location: Location, private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    this.setActiveLink();
  }

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  setActiveLink() {
    const links = this.el.nativeElement.querySelectorAll('.nav-link');
    links.forEach((link: HTMLElement) => {
      this.renderer.removeClass(link, 'active');
      if (link.getAttribute('href') === this.location.path()) {
        this.renderer.addClass(link, 'active');
      }
    });
  }
}