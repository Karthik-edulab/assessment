import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { SharedService } from '../data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isUserOnDesktop: boolean = false;

  ngOnInit() {
    // Initial call to check desktop status
    this.checkDesktopStatus();
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    // Call the function when the window is resized
    this.checkDesktopStatus();
  }

  private checkDesktopStatus(): void {
    this.isUserOnDesktop = window.innerWidth < 979;
  }
  constructor(private sharedService: SharedService) {}

  sideBarCollapsed() {
    this.sharedService.triggerButtonClick();
  }
}
