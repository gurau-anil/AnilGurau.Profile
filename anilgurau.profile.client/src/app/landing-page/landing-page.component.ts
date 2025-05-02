import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MarqueeComponent } from '../marquee/marquee.component';
import { NgxNeonUnderlineComponent } from '@omnedia/ngx-neon-underline';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports:[CommonModule, MarqueeComponent, NgxNeonUnderlineComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  links =[
    {
      icon: "social-links mb fa-brands fa-github",
      link: "https://github.com/gurau-anil"
    },
    {
      icon: "social-links mb fa-brands fa-linkedin-in",
      link: "https://www.linkedin.com/in/anil-gurau/"
    },
    {
      icon: "social-links mb fa-brands fa-upwork",
      link: "https://www.upwork.com/freelancers/~01f1f6114c21122cb4?mp_source=share"
    },
    {
      icon: "social-links mb fa-brands fa-hashnode",
      link: "https://anilgurau.hashnode.dev/"
    }
  ]

  marqueeIcons = [ 
    "devicon-csharp-plain",
    "devicon-dot-net-plain",
    "devicon-dotnetcore-plain",
    "devicon-microsoftsqlserver-plain",
    "devicon-azuresqldatabase-plain",
    "devicon-redis-plain",
    "devicon-docker-plain",
    "devicon-javascript-plain",
    "devicon-jquery-plain",
    "devicon-typescript-plain",
    "devicon-angular-plain",
    "devicon-rxjs-plain",
    "devicon-git-plain",
    "devicon-github-original",
    "devicon-rabbitmq-original"
  ]
  
  ngOnInit(){
  }

  downloadFile() {
    const link = document.createElement('a');
    link.href = 'assets/files/AnilGurau_FullStackDev_CV.pdf';
    link.download = 'AnilGurau_FullStackDev_CV.pdf';
    link.click();
  }

}
