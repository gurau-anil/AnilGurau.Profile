import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MarqueeComponent } from '../marquee/marquee.component';
import { BlogSectionComponent } from "../blog-section/blog-section.component";
import { HashnodeService } from '../../services/hash-node.service';
import { Post } from '../../models/post.model';
import { ButtonComponent } from "../button/button.component";
import { ConnectSectionComponent } from '../connect-section/connect-section.component';
import { NgxTypewriterComponent } from '@omnedia/ngx-typewriter';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, 
    MarqueeComponent,
    BlogSectionComponent, 
    ButtonComponent,
    ConnectSectionComponent,
    NgxTypewriterComponent],
  providers:[HashnodeService],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  links =[
    {
      icon: "social-links mb fa-brands fa-github",
      link: environment.githubUrl
    },
    {
      icon: "social-links mb fa-brands fa-linkedin-in",
      link: environment.linkedInUrl
    },
    {
      icon: "social-links mb fa-solid fa-envelope",
      link: `mailto:${environment.emailAddress}`
    },
    {
      icon: "social-links mb fa-brands fa-upwork",
      link: environment.upworkUrl
    },
    {
      icon: "social-links mb fa-brands fa-hashnode",
      link: environment.hashnodeUrl
    },
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
  posts: Post[] = [];

  constructor(private hashNodeService: HashnodeService){

  }
  
  ngOnInit(){
    this.hashNodeService.getLatestPosts().subscribe((res: any) => {
      this.posts = res.data.publication.posts.edges.map((edge: any) => edge.node);
    });
    
  }

  downloadFile() {
    const link = document.createElement('a');
    link.href = 'assets/files/AnilGurau_FullStackDev_CV.pdf';
    link.download = 'AnilGurau_FullStackDev_CV.pdf';
    link.click();
  }

  openEmail(data: boolean){
    window.location.href = `mailto:${environment.emailAddress}`;
  }
}
