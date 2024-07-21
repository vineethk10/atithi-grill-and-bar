import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  ourStoryImagePath = '../../assets/our-story.jpeg';

  @ViewChild('heroVideo') heroVideo!: ElementRef<HTMLVideoElement>;
  @ViewChild('playPauseButton') playPauseButton!: ElementRef<HTMLButtonElement>;

  ngAfterViewInit() {
    this.playPauseButton.nativeElement.addEventListener('click', this.togglePlayPause.bind(this));
  }

  togglePlayPause() {
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