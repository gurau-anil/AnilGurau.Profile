import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-connect-section',
  standalone: true,
  templateUrl: './connect-section.component.html',
  styleUrl: './connect-section.component.scss'
})
export class ConnectSectionComponent {

  openEmail(){
    const email = environment.emailAddress;
    window.location.href = `mailto:${email}`;
  }

  openLinkedin(){
    window.open(environment.linkedInUrl, "_blank");
  }

  openUpwork(){
    window.open(environment.upworkUrl,"_blank");
  }
}
