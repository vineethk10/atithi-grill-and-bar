import { Component, AfterViewInit, ViewChild, ElementRef, OnInit, NgZone, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { EventService } from '../events/event.service';

interface Event {
  title: string;
  description: string;
  date: Date;
  imageUrl: string;
  width: number;
  height: number;
  bookingLink?: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit, OnInit {
  ourStoryImagePath = '../../assets/our-story.jpg';
  upcomingEvents: Event[] = [];
  isLoading: boolean = true;
  filteredEvents: Event[] = [];
  noEventsMessage: string = ''; // Message to display if no events

  @ViewChild('heroVideo') heroVideo!: ElementRef<HTMLVideoElement>;
  @ViewChild('playPauseButton') playPauseButton!: ElementRef<HTMLButtonElement>;
  @ViewChild('scroller') scroller!: ElementRef;

  constructor(private eventService: EventService, private ngZone: NgZone, private renderer: Renderer2) {}

  ngOnInit(): void {
    // Fetch upcoming events from EventService
    this.eventService.getUpcomingEvents().subscribe(events => {
      const today = new Date();
      this.filteredEvents = events.filter(event => new Date(event.date) > today);

      if (this.filteredEvents.length > 0) {
        this.filteredEvents = [...this.filteredEvents, ...this.filteredEvents];
        this.noEventsMessage = ''; // Clear any message since there are events
      } else {
        // Set a generic promotional message if no events exist
        this.noEventsMessage = 'Join us for our daily specials, live music, and karaoke nights! Make your reservations today!';
      }

      this.isLoading = false; // Stop loader after loading events or showing the message
    });

    // Set a timeout to ensure the loader stops after a reasonable time even if images are slow
    setTimeout(() => {
      if (this.isLoading) {
        // console.warn('Timeout reached, stopping loader.');
        this.isLoading = false;
      }
    }, 5000); // 5 seconds timeout for slow loading scenarios

    this.loadAssets();
  }

  ngAfterViewInit(): void {
    this.setScrollerAnimation();
  }

  loadAssets() {
    const assets = [
      this.ourStoryImagePath,
      '../../assets/fusion-cuisine-new.jpeg',
      '../../assets/cocktails.jpg',
      '../../assets/live-music.jpeg',
      '../../assets/karaoke-nights.jpg',
      '../../assets/private-event.jpeg',
      '../../assets/birthday-parties.jpg',
      '../../assets/corporate-events.jpg'
    ];

    let loadedCount = 0;

    assets.forEach((assetUrl) => {
      const imgElement = this.renderer.createElement('img');
      this.renderer.setAttribute(imgElement, 'src', assetUrl);
      
      // Handle image loading success
      this.renderer.listen(imgElement, 'load', () => {
        loadedCount++;
        // console.log(`Asset loaded: ${assetUrl}`);
        if (loadedCount === assets.length) {
          this.isLoading = false; // All assets loaded successfully
        }
      });

      // Handle image loading error
      this.renderer.listen(imgElement, 'error', () => {
        // console.error(`Failed to load asset: ${assetUrl}`);
        this.isLoading = false; // Stop loader even if there are loading errors
      });
    });
  }

  togglePlayPause() {
    if (this.heroVideo.nativeElement.paused) {
      this.heroVideo.nativeElement.play();
    } else {
      this.heroVideo.nativeElement.pause();
    }
  }

  setScrollerAnimation() {
    if (this.scroller && this.scroller.nativeElement) {
      const scrollerContent = this.scroller.nativeElement.querySelector('.scroller-content');
      if (scrollerContent) {
        const scrollerWidth = scrollerContent.offsetWidth;
        const animationDuration = scrollerWidth / 100;

        this.ngZone.runOutsideAngular(() => {
          scrollerContent.style.animationDuration = `${animationDuration}s`;

          scrollerContent.addEventListener('animationiteration', () => {
            const firstItem = scrollerContent.firstElementChild as HTMLElement;
            scrollerContent.appendChild(firstItem.cloneNode(true));
            scrollerContent.removeChild(firstItem);
          });
        });
      }
    }
  }

  checkAllLoaded() {
    // Ensure that the loading state is properly managed
    if (!this.isLoading) {
      // console.log('All assets and events are loaded successfully.');
    }
  }
}