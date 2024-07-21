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
    {
      title: 'Thanksgiving Dinner',
      description: 'Join us for a delightful Thanksgiving Dinner at Atithi Grill and Bar. Enjoy a traditional Thanksgiving meal with a South Asian twist. Bring your family and friends to celebrate!',
      date: new Date('2024-11-28T00:00:00'),
      imageUrl: '../../assets/Events/thanksgivingdinner-2024.jpg',
      width: 1080,
      height: 1080,
      bookingLink: ''
    }
  ];

  sortedEvents: Event[] = [];

  ngOnInit(): void {
    this.sortedEvents = this.upcomingEvents.sort((a, b) => b.date.getTime() - a.date.getTime());
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
      event.bookingMessage = `Booking for the event "${event.title}" has not yet started.`;
    }
  }
}