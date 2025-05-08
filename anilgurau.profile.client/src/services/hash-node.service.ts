// src/app/services/hashnode.service.ts
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HashnodeService {
  private apiUrl = 'https://gql.hashnode.com/';

  constructor(private http: HttpClient) {}

  getLatestPosts() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  const body = {
    query: `
      query {
        publication(host: "anilgurau.hashnode.dev") {
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
