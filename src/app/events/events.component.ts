import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';
import { Event, EventService } from './event.service';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, DatePipe],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  isContentLoading = true;
  loadedCount = 0;
  totalImages = 0;

  sortedEvents: Event[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.eventService.getUpcomingEvents().subscribe((events) => {
      this.sortedEvents = [...events].sort((a, b) => b.date.getTime() - a.date.getTime());
      this.totalImages = this.sortedEvents.length;
      if (this.totalImages === 0) {
        this.isContentLoading = false;
      }
    });
  }

  onImageLoad(): void {
    this.loadedCount++;
    if (this.loadedCount === this.totalImages) {
      this.isContentLoading = false;  // Hide loader when all images are loaded
    }
  }

  isPastEvent(date: Date): boolean {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  }

  bookEvent(event: Event): void {
    if (event.bookingLink) {
      window.location.href = event.bookingLink;
    } else {
      alert('Please contact us at (512) 520-5197 for booking details.');
    }
  }
}
