export interface CoverImage {
    url: string;
  }
  
  export interface Post {
    title: string;
    brief: string;
    slug: string;
    coverImage: CoverImage | null;
    publishedAt: string;
  }