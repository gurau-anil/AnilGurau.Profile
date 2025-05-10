import { Component } from '@angular/core';

@Component({
  selector: 'app-connect-section',
  standalone: true,
  templateUrl: './connect-section.component.html',
  styleUrl: './connect-section.component.scss'
})
export class ConnectSectionComponent {

  openEmail(){
    const email = 'contact@anilgurau.com';
    window.location.href = `mailto:${email}`;
  }

  openLinkedin(){
    window.open('https://www.linkedin.com/in/anil-gurau/');
  }

  openUpwork(){
    window.open("https://www.upwork.com/freelancers/~01f1f6114c21122cb4","_blank");
  }
}
