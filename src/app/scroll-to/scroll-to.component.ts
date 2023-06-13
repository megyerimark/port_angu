import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-to',
  templateUrl: './scroll-to.component.html',
  styleUrls: ['./scroll-to.component.scss']
})
export class ScrollToComponent {

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrollFunction();
  }
  scrollFunction() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (scrollToTopBtn) {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        scrollToTopBtn.style.display = 'block';
      } else {
        scrollToTopBtn.style.display = 'none';
      }
    }
  }
  scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  ngOnInit() {
    this.onWindowScroll(); // Meghívjuk a scroll ellenőrzést az oldal betöltésekor
  }

}
