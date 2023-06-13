
import { Component, HostListener, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgxTypedJsModule} from 'ngx-typed-js';
import Typed from 'typed.js';
import { ActivatedRoute, Router } from '@angular/router';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SenderserviceService } from '../Email/senderservice.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})


export class PortfolioComponent implements OnInit {
  contentLoaded: boolean = false;



  form!:FormGroup;

  constructor(
    private email:SenderserviceService,
   private router:Router,
    private http:HttpClient,
    private formBuilder:FormBuilder,
    private route: ActivatedRoute
    ){


    }


  downloadCV() {
    const link = document.createElement('a');
    link.href = 'src/assets/Megyeri_Mark_Mate_CV.pdf';
    link.download = 'Megyeri_Mark_Mate_CV.pdf';
    link.click();
  }

  ngOnInit():void {
    const type = new Typed('#change', {
      strings: [' Junior Full-stack Fejlesztő vagyok'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    });

      this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
      tel: ['', Validators.required],
    });



    this.route.fragment.subscribe(fragment =>{
      if(fragment){
        const element = document.querySelector('#'+ fragment)

      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });

      }}
    })
  }
  openWhatsApp() {
    const phoneNumber = '+36307140806';

    const whatsappURL = `https://wa.me/${phoneNumber}`;
    window.open(whatsappURL, '_blank');
  }

  sendmail() {
    let mail ={
      name: this.form.value.name,
      email: this.form.value.email,
      subject: this.form.value.subject,
      message: this.form.value.message,
      tel: this.form.value.tel,

    }

    this.email.send(this.form.value).subscribe({
      next: data => {
        Swal.fire(
          'Köszönöm a megkeresésed!',
          'Hamarosan felveszem Veled a kapcsolatot!',
          'success'
        );
        this.form.reset();
      },
      error: err => {
        console.error(err);
        Swal.fire(
          'Sikertelen!',
          'Hiba történt a küldés során. Kérlek próbáld újra később!',
          'error'
        );
      }
    });
  }

}
