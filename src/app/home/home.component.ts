import { Component, AfterViewInit, ViewChild, ElementRef, OnInit, NgZone } from '@angular/core';
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

  @ViewChild('heroVideo') heroVideo!: ElementRef<HTMLVideoElement>;
  @ViewChild('playPauseButton') playPauseButton!: ElementRef<HTMLButtonElement>;
  @ViewChild('scroller') scroller!: ElementRef;

  constructor(private eventService: EventService, private ngZone: NgZone) {}

  ngOnInit(): void {
    this.eventService.getUpcomingEvents().subscribe(events => {
      const today = new Date();
      this.filteredEvents = events.filter(event => new Date(event.date) > today);
      if (this.filteredEvents.length > 0) {
        this.filteredEvents = [...this.filteredEvents, ...this.filteredEvents];
      }
      this.checkAllLoaded();
    });
  }

  ngAfterViewInit() {
    if (this.heroVideo && this.heroVideo.nativeElement) {
      this.loadAssets();
    }
    if (this.playPauseButton && this.playPauseButton.nativeElement) {
      this.playPauseButton.nativeElement.addEventListener('click', this.togglePlayPause.bind(this));
    }
    this.setScrollerAnimation();
  }

  loadAssets() {
    // Use the @ViewChild heroVideo reference, which is available now in ngAfterViewInit
    const heroVideoElement = this.heroVideo.nativeElement;

    const images = [
      '../../assets/our-story.jpg',
      '../../assets/fusion-cuisine-new.jpeg',
      '../../assets/cocktails.jpg',
      '../../assets/live-music.jpeg',
      '../../assets/karaoke-nights.jpg',
      '../../assets/private-event.jpeg',
      '../../assets/birthday-parties.jpg',
      '../../assets/corporate-events.jpg'
    ];

    let loadedCount = 0;
    const totalAssets = images.length + 1; // +1 for the video

    const checkAssetLoaded = () => {
      loadedCount++;
      if (loadedCount === totalAssets) {
        this.checkAllLoaded();
      }
    };

    // Attach the video load event listener
    heroVideoElement.onloadeddata = checkAssetLoaded;

    images.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onload = checkAssetLoaded;
    });
  }

  checkAllLoaded() {
    // Check if all assets are loaded and events are fetched
    if (this.filteredEvents.length > 0) {
      setTimeout(() => {
        this.isLoading = false;
      }, 1000); // Add a small delay to ensure smooth transition
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

  togglePlayPause() {
    if (this.heroVideo && this.heroVideo.nativeElement) {
      const video = this.heroVideo.nativeElement;
      const button = this.playPauseButton.nativeElement;
      if (video.paused) {
        video.play();
        button.innerHTML = '<i class="fas fa-pause"></i>';
      } else {
        video.pause();
        button.innerHTML = '<i class="fas fa-play"></i>';
      }
    }
  }
}