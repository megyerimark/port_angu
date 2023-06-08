import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgxTypedJsModule} from 'ngx-typed-js';
import Typed from 'typed.js';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})


export class PortfolioComponent {

  downloadCV() {
    const link = document.createElement('a');
    link.href = 'src/assets/Megyeri_Mark_Mate_CV.pdf';
    link.download = 'Megyeri_Mark_Mate_CV.pdf';
    link.click();
  }

  ngOnInit() {
    const type = new Typed('#change', {
      strings: ['Frontend fejlesztő ', 'Back-end fejlesztő', 'Buzi aki imdja a faszt'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    });
  }
  openWhatsApp() {
    const phoneNumber = '+36307140806';

    const whatsappURL = `https://wa.me/${phoneNumber}`;
    window.open(whatsappURL, '_blank');
  }


}
