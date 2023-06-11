import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgxTypedJsModule} from 'ngx-typed-js';
import Typed from 'typed.js';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SenderserviceService } from '../Email/senderservice.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})


export class PortfolioComponent {

  form!:FormGroup;

  constructor(
    private email:SenderserviceService,
   private router:Router,
    private http:HttpClient,
    private formBuilder:FormBuilder){


    }

  downloadCV() {
    const link = document.createElement('a');
    link.href = 'src/assets/Megyeri_Mark_Mate_CV.pdf';
    link.download = 'Megyeri_Mark_Mate_CV.pdf';
    link.click();
  }

  ngOnInit():void {
    const type = new Typed('#change', {
      strings: ['Frontend fejlesztő ', 'Back-end fejlesztő'],
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





    this.email.send(mail).subscribe({
      next:data=>{
        Swal.fire(
          'Köszönöm a megkeresésed!',
          'Hamarosan felveszem Veled a kapcsolatot!',
          'success'
        );
        this.form.reset();

      },
      error:err=>{
       Swal.fire(
        "Sikertelen!",
        "Lérlek tölts ki minden mezőt!", "error"
       )
      }
    })
  }
}
