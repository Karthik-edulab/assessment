import { Component } from '@angular/core';
import { SharedService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'assessment';
  sidebarOpen = false;
  currentValue!: boolean;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.currentBoolean.subscribe((value: boolean) => {
      this.currentValue = value;
    });
    if (this.currentValue === false) {
      this.isSidebarToggled = true;
    }
  }

  isSidebarToggled = false;

  toggleSidebar() {
    this.isSidebarToggled = !this.isSidebarToggled;
  }
}
