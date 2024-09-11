import { Component, OnInit, Inject, PLATFORM_ID, ViewChildren, QueryList, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-orderonline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orderonline.component.html',
  styleUrls: ['./orderonline.component.css']
})
export class OrderOnlineComponent implements OnInit, AfterViewInit {
  isLoading: boolean = true;
  loadedCount: number = 0;
  totalAssets: number = 0;

  @ViewChildren('imageElement') imageElements!: QueryList<ElementRef>; // Track images

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    // Initialization logic, but we remove document.querySelectorAll
  }

  ngAfterViewInit(): void {
    // Ensure this only runs in the browser
    if (isPlatformBrowser(this.platformId)) {
      // Get the total number of image elements
      this.totalAssets = this.imageElements.length;

      if (this.totalAssets === 0) {
        // If no images, hide the loader immediately
        this.hideLoader();
      } else {
        // Add load and error listeners to each image
        this.imageElements.forEach((imgElement) => {
          const img = imgElement.nativeElement as HTMLImageElement;
          img.addEventListener('load', this.onAssetLoad.bind(this));
          img.addEventListener('error', this.onAssetLoad.bind(this));
        });
      }
    }
  }

  onAssetLoad(): void {
    this.loadedCount++;
    if (this.loadedCount >= this.totalAssets) {
      this.hideLoader();
    }
  }

  hideLoader(): void {
    setTimeout(() => {
      this.isLoading = false; // Hide loader after a small delay for a smooth transition
    }, 500);
  }
}