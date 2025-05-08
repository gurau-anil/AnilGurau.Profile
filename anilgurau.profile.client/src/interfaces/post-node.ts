
export interface PostNode {
    title: string;
    slug: string;
    content: {
        markdown: string;
    };
    coverImage?: {
        url: string;
    };
    dateAdded: string;
}
