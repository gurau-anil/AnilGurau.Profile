import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  standalone: false,
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
  
  ngOnInit(){
  }

}
