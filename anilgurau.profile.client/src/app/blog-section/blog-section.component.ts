import { Component, Input } from '@angular/core';
import { BlogCardComponent } from '../blog-card/blog-card.component';
import { CommonModule } from '@angular/common';
import { Post } from '../../models/post.model';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-blog-section',
  imports: [BlogCardComponent, CommonModule, ButtonComponent],
  templateUrl: './blog-section.component.html',
  styleUrl: './blog-section.component.scss'
})
export class BlogSectionComponent {
  @Input() posts: Post[] = [];


  onClick(data: boolean){
    window.open('https://anilgurau.hashnode.dev', '_blank');
  }
}
