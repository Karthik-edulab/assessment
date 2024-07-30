import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  carouselImages!: string[];
  intervalId: any;

  ngOnInit(): void {
    this.startAutoSlide();
    // Array of base64 images or URLs
    this.carouselImages = [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1zwhySGCEBxRRFYIcQgvOLOpRGqrT3d7Qng&s',
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&psig=AOvVaw0_mxQeXHbEWFHt7xpZ8EQm&ust=1722407910051000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCICO6c6TzocDFQAAAAAdAAAAABAI',
      'image/jpeg;base64,...',
    ];
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId); // Clear the interval when the component is destroyed
  }

  startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 3000); // Change slide every 3 seconds
  }

  images = [
    {
      url: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
      alt: 'Image 1',
    },
    {
      url: 'https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg',
      alt: 'Image 2',
    },
    {
      url: 'https://cdn.pixabay.com/photo/2022/05/23/11/26/tree-7215935_1280.jpg',
      alt: 'Image 3',
    },
  ];
  currentIndex = 0;

  prevSlide() {
    clearInterval(this.intervalId);
    this.currentIndex =
      this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1;
    this.startAutoSlide();
  }

  onMouseEnter(): void {
    clearInterval(this.intervalId);
  }

  onMouseLeave(): void {
    this.startAutoSlide();
  }

  nextSlide() {
    clearInterval(this.intervalId);
    this.currentIndex =
      this.currentIndex === this.images.length - 1 ? 0 : this.currentIndex + 1;
    this.startAutoSlide();
  }
}
