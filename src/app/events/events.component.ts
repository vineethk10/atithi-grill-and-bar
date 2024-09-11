import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';

interface Event {
  title: string;
  description: string;
  date: Date;
  imageUrl: string;
  width: number;
  height: number;
  bookingLink?: string;
  bookingMessage?: string; // Add a property for booking message
}

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, DatePipe],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  isContentLoading = true;  // Show loader initially
  loadedCount = 0;          // Track the number of loaded images
  totalImages = 0;          // Total number of Images to load
  upcomingEvents: Event[] = [
    {
      title: 'Fourth of July Celebration',
      description: 'Join us for a spectacular Fourth of July celebration with fireworks, music, and delicious food. Bring your family and friends for a night to remember!',
      date: new Date('2024-07-04T00:00:00'),
      imageUrl: '../../assets/Events/FourthOfJuly.jpg',
      width: 1600,
      height: 900,
      bookingLink: 'https://example.com/book-fourthofjuly'
    },
    {
      title: 'Watch Party: India vs Pakistan T20 World Cup',
      description: 'Catch all the action live! Join us for an electrifying watch party as India takes on Pakistan in the T20 World Cup. Enjoy the match with fellow fans and indulge in our special match-day menu.',
      date: new Date('2024-06-09T00:00:00'),
      imageUrl: '../../assets/Events/watchparty_indpak.jpg',
      width: 772,
      height: 1000,
      bookingLink: ''
    },
    {
      title: 'Watch Party: India vs South Africa T20 World Cup Final',
      description: 'Don\'t miss the grand finale! Watch India battle it out against South Africa in the T20 World Cup Final. Enjoy the thrilling match atmosphere with great food and drinks at Atithi Grill and Bar.',
      date: new Date('2024-06-29T00:00:00'),
      imageUrl: '../../assets/Events/watchparty_indsa.jpg',
      width: 772,
      height: 1000
    },
    {
      title: 'Celebrate International Yoga Day',
      description: 'Embrace tranquility and wellness on International Yoga Day at Atithi Grill and Bar. Join us for a rejuvenating yoga session followed by a healthy brunch. All levels are welcome!',
      date: new Date('2024-06-21T00:00:00'),
      imageUrl: '../../assets/Events/yogaDay2024.jpeg',
      width: 1080,
      height: 1080
    },
    // {
    //   title: 'Thanksgiving Dinner',
    //   description: 'Join us for a delightful Thanksgiving Dinner at Atithi Grill and Bar. Enjoy a traditional Thanksgiving meal with a South Asian twist. Bring your family and friends to celebrate!',
    //   date: new Date('2024-11-28T00:00:00'),
    //   imageUrl: '../../assets/Events/thanksgivingdinner-2024.jpg',
    //   width: 1080,
    //   height: 1080,
    //   bookingLink: ''
    // },
    {
      title: 'Musical Evening with Abhishek Kumar',
      date: new Date('2024-08-13'),
      description: 'Join us for a musical evening with Abhishek Kumar, Indian Idol Season 3 Finalist. Enjoy a night of live music and entertainment at Atithi Grill and Bar.',
      imageUrl: 'assets/Events/singer-abhishek.jpg',
      width: 696,
      height: 354,
      bookingLink: ''
    },
    {
      title: 'Noche de Fiesta',
      description: 'Join us for the biggest Mexican festival with drinks, food, music, and the Canelo Fight. Featuring special guest DJ Albert-I.',
      date: new Date('2024-09-14T19:00:00'), // Event date: September 14th, 7 PM
      imageUrl: 'assets/Events/nochedefiesta-1.jpeg', // Reference the uploaded image
      width: 1600,
      height: 900,
      bookingLink: '' // No booking link provided, can be added later if necessary
    },
];

  sortedEvents: Event[] = [];

  ngOnInit(): void {
    this.sortedEvents = this.upcomingEvents.sort((a, b) => b.date.getTime() - a.date.getTime());
    this.totalImages = this.sortedEvents.length;  // Set the total number of images
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
      // Update bookingMessage with a clickable phone number link
      event.bookingMessage = `Contact Us for more info <a href="tel:+15125205197">(512) 520-5197</a>`;
    }
  }
}