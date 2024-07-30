import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { SharedService } from '../data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor(
    private sharedService: SharedService,
    private renderer: Renderer2
  ) {}
  sideBar: boolean = false;
  id: string = 'sidebar-wrapper';

  ngOnInit(): void {
    this.sharedService.buttonClick$.subscribe(() => {
      this.handleButtonClick();
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    if (window.innerWidth > 768) {
      this.sideBar = false;
      this.id = 'sidebar-wrapper';
    } else {
      this.sideBar = true;
    }
    this.sharedService.changeBoolean(this.sideBar);
  }

  handleButtonClick() {
    this.sideBar = !this.sideBar;
    if (window.innerWidth <= 768) {
      if (!this.sideBar) {
        this.id = 'sidebar-wrapper-open';
      } else {
        this.id = 'sidebar-wrapper';
      }
    } else {
      if (!this.sideBar) {
        this.id = 'sidebar-wrapper';
      } else {
        this.id = 'sidebar-wrapper-close';
      }
    }
    this.sharedService.changeBoolean(this.sideBar);
  }
}
