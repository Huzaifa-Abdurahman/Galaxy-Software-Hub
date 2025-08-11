export interface Blog {
    id: string;
    title: string;
    content: string;
    excerpt: string;
    slug: string;
    author: string;
    createdAt: string;
    updatedAt: string;
    published: boolean;
  }
  
  export interface User {
    id: string;
    username: string;
    email: string;
    role: 'admin' | 'user';
  }