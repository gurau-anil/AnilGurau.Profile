// src/app/services/hashnode.service.ts
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HashnodeService {
  private apiUrl = environment.hashnodeApiBaseUrl;

  constructor(private http: HttpClient) {}

  getLatestPosts() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  const body = {
    query: `
      query {
        publication(host: "${environment.hashnodeBlogHost}") {
          posts(first: 3) {
            edges {
              node {
                title
                brief
                slug
                coverImage {
                  url
                }
                publishedAt
              }
            }
          }
        }
      }
    `
  }

    return this.http.post(this.apiUrl, body, { headers });
  }
}
