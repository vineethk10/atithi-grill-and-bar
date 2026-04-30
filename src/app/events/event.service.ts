import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Event {
  title: string;
  description: string;
  date: Date;
  imageUrl: string;
  width: number;
  height: number;
  bookingLink?: string;
}

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private upcomingEvents: Event[] = [
    {
      title: 'Fourth of July Celebration',
      description: 'Join us for a spectacular Fourth of July celebration with fireworks, music, and delicious food. Bring your family and friends for a night to remember!',
      date: new Date('2026-07-04T19:00:00'),
      imageUrl: 'assets/Events/FourthOfJuly.jpg',
      width: 1600,
      height: 900,
      bookingLink: 'https://example.com/book-fourthofjuly-2026'
    },
    {
      title: 'Watch Party: India vs Pakistan',
      description: 'Catch all the action live with fellow fans and enjoy our special match-day menu and drinks.',
      date: new Date('2026-11-01T14:00:00'),
      imageUrl: 'assets/Events/watchparty_indpak.jpg',
      width: 772,
      height: 1000,
      bookingLink: ''
    },
    {
      title: 'Watch Party: India vs South Africa',
      description: 'Don\'t miss this high-voltage matchup with great food, cold drinks, and a stadium-like atmosphere.',
      date: new Date('2026-12-12T18:00:00'),
      imageUrl: 'assets/Events/watchparty_indsa.jpg',
      width: 772,
      height: 1000
    },
    {
      title: 'Celebrate International Yoga Day',
      description: 'Embrace tranquility and wellness on International Yoga Day at Atithi Grill and Bar. Join us for a rejuvenating yoga session followed by a healthy brunch. All levels are welcome!',
      date: new Date('2026-06-21T10:00:00'),
      imageUrl: 'assets/Events/yogaDay2024.jpeg',
      width: 1080,
      height: 1080
    },
    {
      title: 'Musical Evening with Abhishek Kumar',
      date: new Date('2026-08-13T20:00:00'),
      description: 'Join us for a musical evening with Abhishek Kumar, Indian Idol Season 3 Finalist. Enjoy a night of live music and entertainment at Atithi Grill and Bar.',
      imageUrl: 'assets/Events/singer-abhishek.jpg',
      width: 696,
      height: 354,
      bookingLink: ''
    },
    {
      title: 'Noche de Fiesta',
      description: 'Join us for the biggest Mexican festival with drinks, food, music, and special guest DJ Albert-I.',
      date: new Date('2026-09-14T19:00:00'),
      imageUrl: 'assets/Events/nochedefiesta-1.jpeg',
      width: 1600,
      height: 900,
      bookingLink: ''
    },
];

  constructor() {}

  // Fetch sorted upcoming events
  getUpcomingEvents(): Observable<Event[]> {
    const sortedEvents = [...this.upcomingEvents].sort((a, b) => a.date.getTime() - b.date.getTime());
    return of(sortedEvents);
  }
}
