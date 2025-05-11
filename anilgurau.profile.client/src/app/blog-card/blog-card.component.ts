import { Component, Input } from '@angular/core';
import { Post } from '../../models/post.model';
import { TruncatePipe } from '../pipes/truncate.pipe';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports:[TruncatePipe, CommonModule],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.scss'
})
export class BlogCardComponent {
  @Input() post!: Post;
  hashNodeUrl = environment.hashnodeUrl;
}
