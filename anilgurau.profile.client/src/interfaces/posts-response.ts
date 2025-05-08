import { PostEdge } from "./post-edge";

  export interface PostsResponse {
    data: {
      user: {
        publication: {
          posts: {
            edges: PostEdge[];
          };
        };
      };
    };
  }