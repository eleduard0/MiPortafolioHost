import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  title = 'Mi escuela';

  position = {
    lat : 27.366954,
    lng : -109.931378


  };

  label = {
    color: 'White',
    text: 'Mi escuela'
  }
}
